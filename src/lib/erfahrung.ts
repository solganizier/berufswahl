// Teil 3: Erfahrung – was jemand tatsächlich getan hat, nicht wie gut er
// sich einschätzt. Selbstnoten stimmen nur schwach mit der Leistung
// überein (r ≈ .29), konkrete, vertraute Tätigkeiten deutlich besser
// (Recherche 1.4). Beruf, Ehrenamt und Familie zählen gleich.
//
// Aus diesen Antworten entsteht die Distanz zum Zielberuf (E10): Wie
// viele seiner Kerntätigkeiten kennt die Person schon?
//
// VORSCHAU: elf grobe Tätigkeiten. Die fertige App leitet sie aus den
// O*NET-Arbeitsaktivitäten bzw. ESCO-Kompetenzen ab.

import type { Frage } from "./ablauf";

export type Taetigkeit =
  | "beraten"
  | "lehren"
  | "versorgen"
  | "handwerk"
  | "technik"
  | "auswerten"
  | "zahlen"
  | "organisieren"
  | "fuehren"
  | "verkaufen"
  | "gestalten";

/** `kurz` steht in den Listen „Das bringen Sie mit" und „Das wäre neu". */
export const TAETIGKEITEN: Record<Taetigkeit, { kurz: string }> = {
  beraten: { kurz: "Menschen beraten" },
  lehren: { kurz: "Wissen vermitteln" },
  versorgen: { kurz: "Menschen versorgen" },
  handwerk: { kurz: "Mit Werkzeug arbeiten" },
  technik: { kurz: "Technische Fehler beheben" },
  auswerten: { kurz: "Daten auswerten" },
  zahlen: { kurz: "Mit Zahlen und Budgets arbeiten" },
  organisieren: { kurz: "Abläufe organisieren" },
  fuehren: { kurz: "Ein Team anleiten" },
  verkaufen: { kurz: "Verkaufen und verhandeln" },
  gestalten: { kurz: "Gestalten" },
};

export const ERFAHRUNG_FRAGEN: Frage<Taetigkeit>[] = [
  { id: "erf-beraten", text: "Menschen beraten oder begleiten", schluessel: "beraten" },
  { id: "erf-lehren", text: "Anderen etwas beibringen, zum Beispiel neue Kollegen einarbeiten", schluessel: "lehren" },
  { id: "erf-versorgen", text: "Menschen pflegen, versorgen oder betreuen", schluessel: "versorgen" },
  { id: "erf-handwerk", text: "Mit Werkzeug, Material oder Maschinen arbeiten", schluessel: "handwerk" },
  { id: "erf-technik", text: "Technische Störungen suchen und beheben", schluessel: "technik" },
  { id: "erf-auswerten", text: "Daten auswerten oder Berichte schreiben", schluessel: "auswerten" },
  { id: "erf-zahlen", text: "Rechnungen, Budgets oder Buchhaltung verantworten", schluessel: "zahlen" },
  { id: "erf-organisieren", text: "Abläufe, Termine oder Projekte planen", schluessel: "organisieren" },
  { id: "erf-fuehren", text: "Ein Team anleiten", schluessel: "fuehren" },
  { id: "erf-verkaufen", text: "Verkaufen, verhandeln oder Kunden gewinnen", schluessel: "verkaufen" },
  { id: "erf-gestalten", text: "Etwas gestalten – Texte, Bilder oder Räume", schluessel: "gestalten" },
];
