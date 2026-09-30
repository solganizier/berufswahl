// Die Fragen des Interessenteils.
//
// ACHTUNG, ENTWURF: Das sind selbst formulierte BEISPIELE, zwei je
// Interessenbereich. Die echten Fragen kommen aus der deutschen
// Kurzform des O*NET Interest Profiler (60 Fragen, E9) – eingebaut wird
// sie erst, wenn die Lizenz im Volltext geprüft und gesichert ist
// (docs/uebergabe.md, „Lizenzakte").

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

export interface Frage {
  /** Bleibt stabil, auch wenn sich der Text ändert – daran hängen gespeicherte Antworten. */
  id: string;
  text: string;
  bereich: Bereich;
}

export const FRAGEN: Frage[] = [
  { id: "bsp-r1", text: "Ein Fahrrad reparieren", bereich: "R" },
  { id: "bsp-i1", text: "Herausfinden, warum eine Maschine immer wieder ausfällt", bereich: "I" },
  { id: "bsp-a1", text: "Ein Plakat für eine Veranstaltung gestalten", bereich: "A" },
  { id: "bsp-s1", text: "Jemandem etwas Neues beibringen", bereich: "S" },
  { id: "bsp-e1", text: "Andere von einer neuen Idee überzeugen", bereich: "E" },
  { id: "bsp-c1", text: "Rechnungen prüfen und sauber ablegen", bereich: "C" },
  { id: "bsp-r2", text: "Möbel nach eigenem Plan bauen", bereich: "R" },
  { id: "bsp-i2", text: "Messwerte auswerten und daraus Schlüsse ziehen", bereich: "I" },
  { id: "bsp-a2", text: "Eine Geschichte für ein Hörspiel schreiben", bereich: "A" },
  { id: "bsp-s2", text: "Menschen in einer schwierigen Lage beraten", bereich: "S" },
  { id: "bsp-e2", text: "Ein kleines Team durch ein Projekt führen", bereich: "E" },
  { id: "bsp-c2", text: "Einen Dienstplan für viele Beteiligte erstellen", bereich: "C" },
];
