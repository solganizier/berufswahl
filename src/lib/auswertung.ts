// Auswertung des Interessenteils. Reine Funktionen, ohne Oberfläche –
// damit lassen sie sich einzeln prüfen und später gegen den echten
// Test austauschen.

import { BEREICHSFOLGE, type Bereich, type Frage } from "./fragen";
import { INTERESSEN_HOECHSTWERT } from "./skalen";

export type Profil = Record<Bereich, number>;

/**
 * Mittelwert je Bereich, auf 0 bis 1 gebracht. Unbeantwortete Fragen
 * zählen nicht mit; ein Bereich ganz ohne Antwort steht auf 0.
 */
export function interessenProfil(antworten: Record<string, number>, fragen: Frage[]): Profil {
  const summe = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 } as Profil;
  const anzahl = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 } as Profil;
  for (const frage of fragen) {
    const wert = antworten[frage.id];
    if (wert === undefined) continue;
    summe[frage.bereich] += wert;
    anzahl[frage.bereich] += 1;
  }
  const profil = {} as Profil;
  for (const b of BEREICHSFOLGE) {
    profil[b] = anzahl[b] ? summe[b] / anzahl[b] / INTERESSEN_HOECHSTWERT : 0;
  }
  return profil;
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
