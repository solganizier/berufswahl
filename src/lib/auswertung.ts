// Die Auswertung. Reine Funktionen ohne Oberfläche – so lassen sie sich
// einzeln prüfen und gegen die echten Instrumente austauschen.
//
// Aufbau nach dem PIC-Modell (Gati & Asher 2001, Recherche 3.4):
//   1 · Aussieben      nur harte Grenzen, die die Person selbst setzt (E5)
//   2 · Passung        Interessen und Werte, gegeneinander abgewogen
//   3 · Weg            Wie viele Kerntätigkeiten kennt die Person schon? (E10)
// Schwächen schließen nichts aus: Eine fehlende Tätigkeit steht als
// „das wäre neu" da, als Lernweg – nicht als Abzug.

import type { Ausschluss, Frage } from "./ablauf";
import { BERUFE, type Beruf } from "./berufe";
import { ERFAHRUNG_FRAGEN, type Taetigkeit } from "./erfahrung";
import { BEREICHSFOLGE, INTERESSEN_FRAGEN, type Bereich } from "./interessen";
import { ERFAHRUNG_SKALA, INTERESSEN_SKALA, WICHTIGKEIT_SKALA } from "./skalen";
import { WERTE_FRAGEN, WERTEFOLGE, type Wert } from "./werte";

export type Antworten = Record<string, number>;
export type Profil = Record<Bereich, number>;

/**
 * Mittelwert je Schlüssel, auf 0 bis 1 gebracht. Unbeantwortete Fragen
 * zählen nicht mit; ein Schlüssel ganz ohne Antwort steht auf 0.
 */
function mittelJeSchluessel<S extends string>(
  antworten: Antworten,
  fragen: Frage<S>[],
  schluessel: readonly S[],
  hoechst: number,
): Record<S, number> {
  const summe = new Map<S, number>();
  const anzahl = new Map<S, number>();
  for (const f of fragen) {
    const wert = antworten[f.id];
    if (wert === undefined) continue;
    summe.set(f.schluessel, (summe.get(f.schluessel) ?? 0) + wert);
    anzahl.set(f.schluessel, (anzahl.get(f.schluessel) ?? 0) + 1);
  }
  const ergebnis = {} as Record<S, number>;
  for (const s of schluessel) {
    const n = anzahl.get(s) ?? 0;
    ergebnis[s] = n ? (summe.get(s) ?? 0) / n / hoechst : 0;
  }
  return ergebnis;
}

export function interessenProfil(antworten: Antworten): Profil {
  return mittelJeSchluessel(antworten, INTERESSEN_FRAGEN, BEREICHSFOLGE, INTERESSEN_SKALA.hoechst);
}

export function werteProfil(antworten: Antworten): Record<Wert, number> {
  return mittelJeSchluessel(antworten, WERTE_FRAGEN, WERTEFOLGE, WICHTIGKEIT_SKALA.hoechst);
}

const ALLE_TAETIGKEITEN = ERFAHRUNG_FRAGEN.map((f) => f.schluessel);

export function erfahrungsProfil(antworten: Antworten): Record<Taetigkeit, number> {
  return mittelJeSchluessel(antworten, ERFAHRUNG_FRAGEN, ALLE_TAETIGKEITEN, ERFAHRUNG_SKALA.hoechst);
}

/** Die Bereiche, absteigend nach Stärke. Gleichstand: feste RIASEC-Folge. */
export function rangfolge(profil: Profil): Bereich[] {
  return [...BEREICHSFOLGE].sort((x, y) => profil[y] - profil[x]);
}

/**
 * Hat das Profil einen erkennbaren Schwerpunkt? Liegen alle Bereiche
 * fast gleichauf, wäre „am stärksten ist X" eine Behauptung, die die
 * Antworten nicht hergeben.
 */
export function hatSchwerpunkt(profil: Profil, mindestabstand = 0.1): boolean {
  const werte = BEREICHSFOLGE.map((b) => profil[b]);
  return Math.max(...werte) - Math.min(...werte) >= mindestabstand;
}

/**
 * Pearson-Korrelation zweier Profile. Verglichen wird die FORM des
 * Profils, nicht nur der stärkste Bereich – der Hochpunkt allein
 * verschiebt sich schon zwischen Kurz- und Langfassung eines Tests
 * (Recherche, Praxistransfer). `null`, wenn ein Profil flach ist.
 */
export function korrelation(a: number[], b: number[]): number | null {
  const n = a.length;
  const ma = a.reduce((s, x) => s + x, 0) / n;
  const mb = b.reduce((s, x) => s + x, 0) / n;
  let sab = 0;
  let saa = 0;
  let sbb = 0;
  for (let i = 0; i < n; i++) {
    sab += (a[i] - ma) * (b[i] - mb);
    saa += (a[i] - ma) ** 2;
    sbb += (b[i] - mb) ** 2;
  }
  if (saa < 1e-9 || sbb < 1e-9) return null;
  return sab / Math.sqrt(saa * sbb);
}

/** Korrelation auf 0 bis 1; ein flaches Profil sagt nichts und steht in der Mitte. */
function aehnlichkeit(a: number[], b: number[]): number {
  const r = korrelation(a, b);
  return r === null ? 0.5 : (r + 1) / 2;
}

/**
 * Gewichtung der Passung. Interessen sind das Fundament – über Jahrzehnte
 * stabil und der beste Einzelprädiktor. Werte tragen zur Zufriedenheit
 * bei (Theory of Work Adjustment). Setzung, keine Messung: zu prüfen im
 * Pilot mit 30–50 Umsteigern.
 */
export const GEWICHT_INTERESSEN = 0.7;
export const GEWICHT_WERTE = 0.3;

export type Weg = "nah" | "mittel" | "weit";

export interface Vorschlag {
  beruf: Beruf;
  /** 0 bis 1 */
  passung: number;
  /** Anteil der Kerntätigkeiten, die die Person kennt (gelegentlich zählt halb), 0 bis 1 */
  mitgebracht: number;
  weg: Weg;
  /** Kerntätigkeiten, die die Person mindestens gelegentlich getan hat */
  bekannt: Taetigkeit[];
  /** Davon die, die sie regelmäßig tut – sie zählen voll, gelegentliche halb */
  regelmaessig: Taetigkeit[];
  /** Kerntätigkeiten, die neu wären – ein Lernweg, kein Ausschluss */
  neu: Taetigkeit[];
  /** Interessenbereiche, die bei Person UND Beruf ausgeprägt sind */
  passendeBereiche: Bereich[];
  /** Werte, die der Person wichtig sind und die der Beruf bietet */
  passendeWerte: Wert[];
}

/**
 * Schwellen für die Anzeige – Setzungen, im Pilot zu prüfen. Am
 * 30.09.2026 angezogen: Mit 0,6 / 0,3 stand bei der Beispielperson jeder
 * der acht besten Berufe auf „nah", und eine Liste, in der alles gleich
 * aussieht, hilft nicht beim Entscheiden.
 */
export function wegAus(mitgebracht: number): Weg {
  if (mitgebracht >= 0.75) return "nah";
  if (mitgebracht >= 0.4) return "mittel";
  return "weit";
}

export interface Rangliste {
  vorschlaege: Vorschlag[];
  /** Wie viele Berufe an den harten Grenzen aussortiert wurden */
  aussortiert: number;
}

export function rangliste(antworten: Antworten, ausschluesse: Ausschluss[]): Rangliste {
  const interessen = interessenProfil(antworten);
  const werte = werteProfil(antworten);
  const erfahrung = erfahrungsProfil(antworten);
  const pI = BEREICHSFOLGE.map((b) => interessen[b]);
  const pW = WERTEFOLGE.map((w) => werte[w]);

  // 1 · Aussieben
  const zugelassen = BERUFE.filter((b) => !b.grenzen.some((g) => ausschluesse.includes(g)));

  const vorschlaege = zugelassen.map((beruf): Vorschlag => {
    // 2 · Passung
    const passung =
      GEWICHT_INTERESSEN * aehnlichkeit(pI, BEREICHSFOLGE.map((b) => beruf.interessen[b])) +
      GEWICHT_WERTE * aehnlichkeit(pW, WERTEFOLGE.map((w) => beruf.werte[w]));

    // 3 · Weg
    const kenntnis = beruf.taetigkeiten.map((t) => erfahrung[t] ?? 0);
    const mitgebracht = kenntnis.reduce((s, x) => s + x, 0) / Math.max(1, kenntnis.length);

    return {
      beruf,
      passung,
      mitgebracht,
      weg: wegAus(mitgebracht),
      bekannt: beruf.taetigkeiten.filter((t) => (erfahrung[t] ?? 0) >= 0.5),
      regelmaessig: beruf.taetigkeiten.filter((t) => (erfahrung[t] ?? 0) >= 1),
      neu: beruf.taetigkeiten.filter((t) => (erfahrung[t] ?? 0) < 0.5),
      passendeBereiche: rangfolge(interessen).filter((b) => interessen[b] >= 0.6 && beruf.interessen[b] >= 0.6),
      passendeWerte: WERTEFOLGE.filter((w) => werte[w] >= 0.75 && beruf.werte[w] >= 0.7),
    };
  });

  vorschlaege.sort((a, b) => b.passung - a.passung);
  return { vorschlaege, aussortiert: BERUFE.length - zugelassen.length };
}

/**
 * Grobe Stufe für die Anzeige – die Zahl allein täuscht eine Genauigkeit
 * vor, die es nicht gibt. Schwellen wie bei wegAus() angezogen (vorher
 * 0,75 / 0,6: alle acht besten Berufe „hoch").
 */
export function passungsStufe(passung: number): "hoch" | "mittel" | "gering" {
  if (passung >= 0.85) return "hoch";
  if (passung >= 0.7) return "mittel";
  return "gering";
}
