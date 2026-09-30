// Teil 2: Arbeitswerte – die sechs Werte des O*NET Work Importance
// Profiler (Theory of Work Adjustment). O*NET führt für jeden Beruf ein
// Profil mit denselben sechs Werten; darauf beruht der Abgleich.
//
// VORSCHAU: eine Aussage je Wert, selbst formuliert. Der echte Teil
// kommt als geprüfte Übersetzung des WIP (E9).

import type { Frage } from "./ablauf";

export type Wert = "leistung" | "selbststaendigkeit" | "anerkennung" | "miteinander" | "rueckhalt" | "sicherheit";

/** Reihenfolge wie in O*NET: Achievement, Independence, Recognition, Relationships, Support, Working Conditions */
export const WERTEFOLGE: Wert[] = ["leistung", "selbststaendigkeit", "anerkennung", "miteinander", "rueckhalt", "sicherheit"];

/** `kurz` steht in Aufzählungen: „bietet, was Ihnen wichtig ist: …" */
export const WERTE: Record<Wert, { kurz: string }> = {
  leistung: { kurz: "sichtbare Ergebnisse" },
  selbststaendigkeit: { kurz: "Selbstständigkeit" },
  anerkennung: { kurz: "Anerkennung" },
  miteinander: { kurz: "Miteinander" },
  rueckhalt: { kurz: "Rückhalt" },
  sicherheit: { kurz: "Sicherheit" },
};

export const WERTE_FRAGEN: Frage<Wert>[] = [
  { id: "wert-leistung", text: "Dass ich sehe, was ich mit meiner Arbeit erreicht habe", schluessel: "leistung" },
  { id: "wert-selbst", text: "Dass ich selbst entscheiden kann, wie ich arbeite", schluessel: "selbststaendigkeit" },
  { id: "wert-anerkennung", text: "Dass meine Arbeit angesehen ist und ich aufsteigen kann", schluessel: "anerkennung" },
  { id: "wert-miteinander", text: "Dass ich anderen helfen kann und gut mit Kollegen auskomme", schluessel: "miteinander" },
  { id: "wert-rueckhalt", text: "Dass meine Vorgesetzten hinter mir stehen", schluessel: "rueckhalt" },
  { id: "wert-sicherheit", text: "Dass mein Arbeitsplatz sicher ist und gut bezahlt", schluessel: "sicherheit" },
];
