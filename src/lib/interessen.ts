// Teil 1: Interessen nach Holland (RIASEC).
//
// ACHTUNG, VORSCHAU: Das sind selbst formulierte BEISPIELE, zwei je
// Bereich. Die echten Fragen kommen aus der deutschen Kurzform des
// O*NET Interest Profiler (60 Fragen, E9) – eingesetzt werden sie, wenn
// die Lizenz im Volltext geprüft und gesichert ist. Die IDs bleiben das
// Scharnier: Die Auswertung braucht nur `bereich` je Frage.

import type { Frage } from "./ablauf";

/** Die sechs Interessenbereiche nach Holland (RIASEC). */
export type Bereich = "R" | "I" | "A" | "S" | "E" | "C";

export const BEREICHE: Record<Bereich, { name: string; satz: string }> = {
  R: { name: "Praktisch", satz: "mit Händen, Werkzeug und Technik" },
  I: { name: "Forschend", satz: "Dingen auf den Grund gehen" },
  A: { name: "Gestaltend", satz: "eigene Ideen sichtbar machen" },
  S: { name: "Sozial", satz: "mit und für Menschen arbeiten" },
  E: { name: "Unternehmerisch", satz: "überzeugen und voranbringen" },
  C: { name: "Ordnend", satz: "Abläufe, Zahlen und Sorgfalt" },
};

/** Die feste Reihenfolge, auch für Gleichstände. */
export const BEREICHSFOLGE: Bereich[] = ["R", "I", "A", "S", "E", "C"];

export const INTERESSEN_FRAGEN: Frage<Bereich>[] = [
  { id: "bsp-r1", text: "Ein Fahrrad reparieren", schluessel: "R" },
  { id: "bsp-i1", text: "Herausfinden, warum eine Maschine immer wieder ausfällt", schluessel: "I" },
  { id: "bsp-a1", text: "Ein Plakat für eine Veranstaltung gestalten", schluessel: "A" },
  { id: "bsp-s1", text: "Jemandem etwas Neues beibringen", schluessel: "S" },
  { id: "bsp-e1", text: "Andere von einer neuen Idee überzeugen", schluessel: "E" },
  { id: "bsp-c1", text: "Rechnungen prüfen und sauber ablegen", schluessel: "C" },
  { id: "bsp-r2", text: "Möbel nach eigenem Plan bauen", schluessel: "R" },
  { id: "bsp-i2", text: "Messwerte auswerten und daraus Schlüsse ziehen", schluessel: "I" },
  { id: "bsp-a2", text: "Eine Geschichte für ein Hörspiel schreiben", schluessel: "A" },
  { id: "bsp-s2", text: "Menschen in einer schwierigen Lage beraten", schluessel: "S" },
  { id: "bsp-e2", text: "Ein kleines Team durch ein Projekt führen", schluessel: "E" },
  { id: "bsp-c2", text: "Einen Dienstplan für viele Beteiligte erstellen", schluessel: "C" },
];
