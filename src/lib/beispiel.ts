// Eine Beispielperson, damit man das Ergebnis sieht, ohne alle Fragen
// zu beantworten – nur für Vorschau und Entwurf.
//
// Sachbearbeiterin in einer Versicherung, 44 Jahre. Mag den Kontakt mit
// Menschen, ist sorgfältig, will Sicherheit, keine Schichtarbeit.

import type { Ausschluss } from "./ablauf";
import type { Antworten } from "./auswertung";

export const BEISPIEL_NAME = "Sachbearbeiterin in einer Versicherung, 44";

export const BEISPIEL_ANTWORTEN: Antworten = {
  // Interessen (0 sehr ungern … 4 sehr gern)
  "bsp-r1": 0, "bsp-i1": 2, "bsp-a1": 1, "bsp-s1": 4, "bsp-e1": 3, "bsp-c1": 3,
  "bsp-r2": 1, "bsp-i2": 3, "bsp-a2": 1, "bsp-s2": 4, "bsp-e2": 2, "bsp-c2": 3,
  // Werte (0 unwichtig … 4 sehr wichtig)
  "wert-leistung": 3, "wert-selbst": 2, "wert-anerkennung": 2,
  "wert-miteinander": 4, "wert-rueckhalt": 3, "wert-sicherheit": 4,
  // Erfahrung (0 nie, 1 gelegentlich, 2 regelmäßig)
  "erf-beraten": 2, "erf-lehren": 1, "erf-versorgen": 0, "erf-handwerk": 0,
  "erf-technik": 0, "erf-auswerten": 1, "erf-zahlen": 2, "erf-organisieren": 2,
  "erf-fuehren": 0, "erf-verkaufen": 1, "erf-gestalten": 0,
};

export const BEISPIEL_AUSSCHLUESSE: Ausschluss[] = ["schicht"];
