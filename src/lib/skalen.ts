// Antwortstufen. Die Beschriftungen sind Platzhalter, bis die Stufen
// des echten Tests aus der Lizenzakte übernommen sind (E9).

export interface Stufe {
  wert: number;
  text: string;
}

/** Interessen: fünf Stufen, wert 0 (sehr ungern) bis 4 (sehr gern). */
export const INTERESSEN_SKALA: Stufe[] = [
  { wert: 0, text: "sehr ungern" },
  { wert: 1, text: "eher ungern" },
  { wert: 2, text: "weiß nicht" },
  { wert: 3, text: "eher gern" },
  { wert: 4, text: "sehr gern" },
];

export const INTERESSEN_HOECHSTWERT = 4;
