// Antwortstufen je Testteil. Die Beschriftungen sind Platzhalter, bis
// die Stufen der echten Instrumente aus der Lizenzakte übernommen sind.

export interface Stufe {
  wert: number;
  text: string;
}

export interface Skala {
  stufen: Stufe[];
  /** Der höchste `wert` – teilt die Antworten auf 0 bis 1 */
  hoechst: number;
}

function skala(texte: string[]): Skala {
  return { stufen: texte.map((text, wert) => ({ wert, text })), hoechst: texte.length - 1 };
}

export const INTERESSEN_SKALA = skala(["sehr ungern", "eher ungern", "weiß nicht", "eher gern", "sehr gern"]);
export const WICHTIGKEIT_SKALA = skala(["unwichtig", "eher unwichtig", "teils, teils", "wichtig", "sehr wichtig"]);
/** Drei Stufen, weil Erfahrung eine Häufigkeit ist, keine Vorliebe (E13) */
export const ERFAHRUNG_SKALA = skala(["nie", "gelegentlich", "regelmäßig"]);
