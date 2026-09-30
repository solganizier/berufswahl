// Das Berufsverzeichnis.
//
// ACHTUNG, VORSCHAU: BEISPIELDATEN. Die Profile sind nach den bekannten
// Holland-Codes der Berufe geschätzt, nicht gemessen. In der fertigen
// App kommen sie aus O*NET 31.0 (Interessen, Werte, Arbeitsaktivitäten),
// übertragen auf deutsche Berufe über die offizielle ESCO-Überleitung
// (E12). Pflichtnennung dann: „enthält Informationen aus der O*NET 31.0
// Database der USDOL/ETA, genutzt unter CC BY 4.0, verändert".
//
// Die Struktur ist die, die bleibt: Jeder Beruf hat ein Interessen- und
// ein Werteprofil (0 bis 1), seine Kerntätigkeiten, den Zugang und die
// harten Grenzen, an denen er aussortiert werden kann.

import type { Ausschluss } from "./ablauf";
import type { Taetigkeit } from "./erfahrung";
import type { Bereich } from "./interessen";
import type { Wert } from "./werte";

export interface Beruf {
  id: string;
  name: string;
  /** Wie man hineinkommt – für Umsteiger die erste Frage */
  zugang: string;
  interessen: Record<Bereich, number>;
  werte: Record<Wert, number>;
  /** Die Kerntätigkeiten; daraus ergibt sich der Weg (E10) */
  taetigkeiten: Taetigkeit[];
  /** Woran der Beruf bei harten Grenzen scheitert (E5) */
  grenzen: Ausschluss[];
}

function riasec(R: number, I: number, A: number, S: number, E: number, C: number): Record<Bereich, number> {
  return { R, I, A, S, E, C };
}
function werte(
  leistung: number,
  selbststaendigkeit: number,
  anerkennung: number,
  miteinander: number,
  rueckhalt: number,
  sicherheit: number,
): Record<Wert, number> {
  return { leistung, selbststaendigkeit, anerkennung, miteinander, rueckhalt, sicherheit };
}

export const BERUFE: Beruf[] = [
  // Mit und für Menschen
  { id: "pflegefachkraft", name: "Pflegefachkraft", zugang: "Ausbildung, 3 Jahre – mit Vorerfahrung verkürzbar",
    interessen: riasec(0.4, 0.35, 0.1, 0.95, 0.3, 0.45), werte: werte(0.7, 0.3, 0.4, 0.95, 0.6, 0.65),
    taetigkeiten: ["versorgen", "beraten", "organisieren"], grenzen: ["schicht", "koerperlich", "lang"] },
  { id: "sozialarbeit", name: "Sozialarbeiter/in", zugang: "Studium, auch berufsbegleitend",
    interessen: riasec(0.1, 0.45, 0.35, 0.95, 0.45, 0.4), werte: werte(0.75, 0.6, 0.45, 0.95, 0.5, 0.5),
    taetigkeiten: ["beraten", "organisieren", "auswerten"], grenzen: ["lang"] },
  { id: "erzieher", name: "Erzieher/in", zugang: "Ausbildung, als Quereinstieg auch bezahlt (PiA)",
    interessen: riasec(0.25, 0.25, 0.6, 0.95, 0.3, 0.3), werte: werte(0.6, 0.5, 0.35, 0.95, 0.55, 0.55),
    taetigkeiten: ["lehren", "versorgen", "beraten", "organisieren"], grenzen: ["lang"] },
  { id: "heilerziehung", name: "Heilerziehungspfleger/in", zugang: "Ausbildung, 2–3 Jahre",
    interessen: riasec(0.45, 0.3, 0.45, 0.95, 0.25, 0.35), werte: werte(0.65, 0.4, 0.3, 0.95, 0.6, 0.6),
    taetigkeiten: ["versorgen", "lehren", "beraten"], grenzen: ["schicht", "koerperlich", "lang"] },
  { id: "physiotherapie", name: "Physiotherapeut/in", zugang: "Ausbildung, 3 Jahre",
    interessen: riasec(0.6, 0.6, 0.2, 0.85, 0.3, 0.3), werte: werte(0.8, 0.55, 0.5, 0.85, 0.45, 0.55),
    taetigkeiten: ["versorgen", "beraten", "lehren"], grenzen: ["koerperlich", "lang"] },
  { id: "mfa", name: "Medizinische/r Fachangestellte/r", zugang: "Ausbildung, 3 Jahre",
    interessen: riasec(0.4, 0.45, 0.1, 0.8, 0.3, 0.75), werte: werte(0.6, 0.3, 0.35, 0.8, 0.6, 0.7),
    taetigkeiten: ["versorgen", "organisieren", "zahlen", "beraten"], grenzen: ["lang"] },

  // Beraten, schulen, vermitteln
  { id: "trainer", name: "Trainer/in in der Erwachsenenbildung", zugang: "Weiterbildung, Fachwissen aus dem bisherigen Beruf zählt",
    interessen: riasec(0.2, 0.5, 0.45, 0.9, 0.55, 0.35), werte: werte(0.75, 0.75, 0.55, 0.8, 0.4, 0.5),
    taetigkeiten: ["lehren", "beraten", "organisieren", "gestalten"], grenzen: ["reisen"] },
  { id: "karriereberatung", name: "Karriereberater/in", zugang: "Weiterbildung in Beratung, oft berufsbegleitend",
    interessen: riasec(0.1, 0.5, 0.35, 0.95, 0.55, 0.4), werte: werte(0.75, 0.7, 0.5, 0.9, 0.45, 0.5),
    taetigkeiten: ["beraten", "lehren", "auswerten", "organisieren"], grenzen: [] },
  { id: "personal", name: "Personalreferent/in", zugang: "Weiterbildung (IHK), Studium von Vorteil",
    interessen: riasec(0.05, 0.35, 0.2, 0.75, 0.7, 0.7), werte: werte(0.65, 0.55, 0.6, 0.8, 0.5, 0.75),
    taetigkeiten: ["beraten", "organisieren", "auswerten", "verkaufen"], grenzen: [] },
  { id: "verwaltung", name: "Verwaltungsfachangestellte/r", zugang: "Ausbildung oder Quereinstieg mit Lehrgang",
    interessen: riasec(0.1, 0.35, 0.1, 0.5, 0.45, 0.9), werte: werte(0.55, 0.35, 0.45, 0.6, 0.65, 0.95),
    taetigkeiten: ["organisieren", "zahlen", "beraten"], grenzen: [] },

  // Handwerk und Technik
  { id: "elektronik", name: "Elektroniker/in für Gebäudetechnik", zugang: "Umschulung, 2 Jahre",
    interessen: riasec(0.95, 0.6, 0.1, 0.2, 0.25, 0.5), werte: werte(0.75, 0.5, 0.45, 0.45, 0.5, 0.75),
    taetigkeiten: ["handwerk", "technik", "organisieren"], grenzen: ["koerperlich", "lang"] },
  { id: "mechatronik", name: "Mechatroniker/in", zugang: "Umschulung, 2 Jahre",
    interessen: riasec(0.95, 0.65, 0.15, 0.15, 0.2, 0.45), werte: werte(0.75, 0.45, 0.45, 0.4, 0.5, 0.75),
    taetigkeiten: ["handwerk", "technik", "auswerten"], grenzen: ["schicht", "koerperlich", "lang"] },
  { id: "tischler", name: "Tischler/in", zugang: "Ausbildung oder Umschulung, 2–3 Jahre",
    interessen: riasec(0.95, 0.35, 0.6, 0.15, 0.3, 0.35), werte: werte(0.9, 0.6, 0.4, 0.4, 0.4, 0.5),
    taetigkeiten: ["handwerk", "gestalten", "organisieren"], grenzen: ["koerperlich", "lang"] },
  { id: "gartenbau", name: "Landschaftsgärtner/in", zugang: "Umschulung, 2 Jahre",
    interessen: riasec(0.95, 0.3, 0.45, 0.2, 0.25, 0.3), werte: werte(0.85, 0.45, 0.3, 0.5, 0.45, 0.5),
    taetigkeiten: ["handwerk", "gestalten"], grenzen: ["koerperlich", "lang"] },
  { id: "lokfuehrer", name: "Lokführer/in", zugang: "Quereinstieg, rund 10 Monate, oft bezahlt",
    interessen: riasec(0.85, 0.35, 0.05, 0.15, 0.2, 0.6), werte: werte(0.55, 0.7, 0.35, 0.3, 0.5, 0.85),
    taetigkeiten: ["technik"], grenzen: ["schicht"] },
  { id: "lager", name: "Fachkraft für Lagerlogistik", zugang: "Quereinstieg möglich, Abschluss per Umschulung",
    interessen: riasec(0.8, 0.2, 0.05, 0.25, 0.3, 0.7), werte: werte(0.5, 0.35, 0.3, 0.55, 0.55, 0.7),
    taetigkeiten: ["handwerk", "organisieren"], grenzen: ["schicht", "koerperlich"] },

  // Forschen, Daten, IT
  { id: "it-admin", name: "IT-Administrator/in", zugang: "Umschulung Fachinformatik, 2 Jahre",
    interessen: riasec(0.55, 0.8, 0.2, 0.3, 0.25, 0.65), werte: werte(0.75, 0.65, 0.5, 0.45, 0.5, 0.8),
    taetigkeiten: ["technik", "auswerten", "organisieren"], grenzen: ["lang"] },
  { id: "software", name: "Softwareentwickler/in", zugang: "Studium, Umschulung oder Weiterbildung mit Nachweisen",
    interessen: riasec(0.3, 0.9, 0.45, 0.2, 0.3, 0.6), werte: werte(0.85, 0.75, 0.55, 0.45, 0.45, 0.8),
    taetigkeiten: ["technik", "auswerten", "gestalten"], grenzen: ["lang"] },
  { id: "daten", name: "Datenanalyst/in", zugang: "Weiterbildung, oft 6–12 Monate",
    interessen: riasec(0.1, 0.95, 0.25, 0.2, 0.35, 0.8), werte: werte(0.8, 0.65, 0.55, 0.4, 0.45, 0.8),
    taetigkeiten: ["auswerten", "zahlen", "organisieren"], grenzen: [] },
  { id: "labor", name: "Chemielaborant/in", zugang: "Ausbildung oder Umschulung, 2–3 Jahre",
    interessen: riasec(0.7, 0.9, 0.1, 0.15, 0.15, 0.6), werte: werte(0.75, 0.45, 0.4, 0.4, 0.5, 0.75),
    taetigkeiten: ["auswerten", "handwerk", "technik"], grenzen: ["lang"] },
  { id: "qualitaet", name: "Qualitätsmanager/in", zugang: "Weiterbildung, Berufserfahrung zählt",
    interessen: riasec(0.6, 0.75, 0.1, 0.3, 0.4, 0.8), werte: werte(0.75, 0.55, 0.5, 0.45, 0.5, 0.8),
    taetigkeiten: ["auswerten", "technik", "organisieren"], grenzen: [] },

  // Zahlen und Ordnung
  { id: "buchhaltung", name: "Finanzbuchhalter/in", zugang: "Weiterbildung (IHK), berufsbegleitend",
    interessen: riasec(0.05, 0.45, 0.05, 0.2, 0.35, 0.95), werte: werte(0.65, 0.45, 0.45, 0.4, 0.55, 0.9),
    taetigkeiten: ["zahlen", "auswerten", "organisieren"], grenzen: [] },
  { id: "steuer", name: "Steuerfachangestellte/r", zugang: "Ausbildung, 3 Jahre – mit Vorerfahrung verkürzbar",
    interessen: riasec(0.05, 0.5, 0.05, 0.35, 0.4, 0.95), werte: werte(0.65, 0.4, 0.5, 0.5, 0.55, 0.85),
    taetigkeiten: ["zahlen", "beraten", "auswerten"], grenzen: ["lang"] },

  // Überzeugen und voranbringen
  { id: "projekt", name: "Projektmanager/in", zugang: "Weiterbildung mit Zertifikat, Erfahrung zählt",
    interessen: riasec(0.15, 0.45, 0.3, 0.6, 0.9, 0.7), werte: werte(0.85, 0.7, 0.7, 0.6, 0.45, 0.7),
    taetigkeiten: ["organisieren", "fuehren", "verkaufen", "auswerten"], grenzen: [] },
  { id: "vertrieb", name: "Vertriebsmitarbeiter/in im Außendienst", zugang: "Quereinstieg üblich",
    interessen: riasec(0.1, 0.2, 0.2, 0.65, 0.95, 0.4), werte: werte(0.8, 0.8, 0.75, 0.6, 0.35, 0.6),
    taetigkeiten: ["verkaufen", "beraten", "organisieren"], grenzen: ["reisen"] },
  { id: "kundenservice", name: "Teamleitung im Kundenservice", zugang: "Aufstieg aus dem Service, Führungsweiterbildung",
    interessen: riasec(0.1, 0.3, 0.15, 0.75, 0.75, 0.6), werte: werte(0.7, 0.55, 0.65, 0.75, 0.5, 0.7),
    taetigkeiten: ["fuehren", "beraten", "organisieren", "verkaufen"], grenzen: ["schicht"] },
  { id: "immobilien", name: "Immobilienmakler/in", zugang: "Sachkundenachweis, Quereinstieg üblich",
    interessen: riasec(0.1, 0.25, 0.25, 0.6, 0.95, 0.55), werte: werte(0.8, 0.85, 0.7, 0.55, 0.3, 0.5),
    taetigkeiten: ["verkaufen", "beraten", "zahlen", "organisieren"], grenzen: ["reisen"] },

  // Gestalten
  { id: "grafik", name: "Grafikdesigner/in", zugang: "Ausbildung, Studium oder Mappe mit Arbeiten",
    interessen: riasec(0.25, 0.35, 0.95, 0.25, 0.4, 0.35), werte: werte(0.85, 0.8, 0.55, 0.4, 0.4, 0.5),
    taetigkeiten: ["gestalten", "organisieren"], grenzen: ["lang"] },
  { id: "redaktion", name: "Redakteur/in für Online-Inhalte", zugang: "Volontariat oder Quereinstieg mit Arbeitsproben",
    interessen: riasec(0.05, 0.6, 0.85, 0.45, 0.5, 0.4), werte: werte(0.8, 0.7, 0.6, 0.5, 0.4, 0.55),
    taetigkeiten: ["gestalten", "auswerten", "organisieren"], grenzen: [] },
  { id: "ux", name: "UX-Designer/in", zugang: "Weiterbildung, 6–12 Monate, mit Arbeitsproben",
    interessen: riasec(0.2, 0.75, 0.8, 0.55, 0.45, 0.4), werte: werte(0.8, 0.7, 0.55, 0.55, 0.45, 0.7),
    taetigkeiten: ["gestalten", "auswerten", "beraten"], grenzen: [] },
];
