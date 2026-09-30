// Der Ablauf als flache Liste von Schritten. Eine Position zeigt auf
// genau einen Schritt – damit sind Weiter, Zurück und Weitermachen nach
// dem Schließen dasselbe: eine Zahl hoch oder runter.

import { INTERESSEN_FRAGEN } from "./interessen";
import { WERTE_FRAGEN } from "./werte";
import { ERFAHRUNG_FRAGEN } from "./erfahrung";
import { ERFAHRUNG_SKALA, INTERESSEN_SKALA, WICHTIGKEIT_SKALA, type Skala } from "./skalen";

export interface Frage<S extends string = string> {
  /** Bleibt stabil, auch wenn sich der Text ändert – daran hängen gespeicherte Antworten. */
  id: string;
  text: string;
  /** Wohin die Antwort in der Auswertung zählt (Bereich, Wert oder Tätigkeit) */
  schluessel: S;
}

export type TeilId = "interessen" | "werte" | "erfahrung";

export interface Teil {
  id: TeilId;
  titel: string;
  einleitung: string;
  /** Die Frage über jeder Aussage */
  kopf: string;
  skala: Skala;
  fragen: Frage[];
}

export const TEILE: Teil[] = [
  {
    id: "interessen",
    titel: "Ihre Interessen",
    einleitung: "Zu jeder Tätigkeit: Wie gern würden Sie das tun? Ob Sie es können, spielt keine Rolle.",
    kopf: "Wie gern würden Sie das tun?",
    skala: INTERESSEN_SKALA,
    fragen: INTERESSEN_FRAGEN,
  },
  {
    id: "werte",
    titel: "Was Ihnen wichtig ist",
    einleitung: "Was muss eine Arbeit bieten, damit Sie zufrieden sind?",
    kopf: "Wie wichtig ist Ihnen das?",
    skala: WICHTIGKEIT_SKALA,
    fragen: WERTE_FRAGEN,
  },
  {
    id: "erfahrung",
    titel: "Was Sie schon getan haben",
    einleitung: "Beruf, Ehrenamt und Familie zählen gleich. Daraus ergibt sich, wie weit der Weg in einen neuen Beruf ist.",
    kopf: "Wie oft haben Sie das in den letzten Jahren getan?",
    skala: ERFAHRUNG_SKALA,
    fragen: ERFAHRUNG_FRAGEN,
  },
];

export type Schritt =
  | { art: "teilstart"; teil: Teil; teilNr: number }
  | { art: "frage"; teil: Teil; teilNr: number; frage: Frage; nummer: number }
  | { art: "ausschluesse" };

export const SCHRITTE: Schritt[] = [
  ...TEILE.flatMap((teil, i): Schritt[] => [
    { art: "teilstart", teil, teilNr: i + 1 },
    ...teil.fragen.map((frage, j): Schritt => ({ art: "frage", teil, teilNr: i + 1, frage, nummer: j + 1 })),
  ]),
  { art: "ausschluesse" },
];

export const ALLE_FRAGEN: Frage[] = TEILE.flatMap((t) => t.fragen);

/** Harte Grenzen (E5): Nur was hier angekreuzt wird, sortiert aus. */
export type Ausschluss = "schicht" | "koerperlich" | "lang" | "reisen";

export const AUSSCHLUESSE: { id: Ausschluss; text: string }[] = [
  { id: "schicht", text: "Schicht- oder Wochenendarbeit" },
  { id: "koerperlich", text: "Körperlich schwere Arbeit" },
  { id: "lang", text: "Ein Weg, der länger als ein Jahr dauert, etwa eine volle Ausbildung oder ein Studium" },
  { id: "reisen", text: "Viel unterwegs sein" },
];
