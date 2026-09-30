// Der Stand bleibt auf dem Gerät (E3): im Speicher des Browsers, nie
// auf einem Server. Jeder Zugriff ist abgesichert – in privaten Fenstern
// oder bei gesperrtem Speicher läuft die App trotzdem, nur ohne
// Weitermachen nach dem Schließen.

const SCHLUESSEL = "traumjobfinder:stand";
const FASSUNG = 1;

export interface Stand {
  fassung: typeof FASSUNG;
  /** Antwort je Frage-ID */
  antworten: Record<string, number>;
  /** Index der nächsten offenen Frage */
  position: number;
}

export function neuerStand(): Stand {
  return { fassung: FASSUNG, antworten: {}, position: 0 };
}

export function laden(): Stand | null {
  try {
    const roh = localStorage.getItem(SCHLUESSEL);
    if (!roh) return null;
    const stand = JSON.parse(roh);
    // Ein Stand aus einer älteren Fassung passt nicht zu den heutigen Fragen.
    if (stand?.fassung !== FASSUNG || typeof stand.position !== "number") return null;
    return stand as Stand;
  } catch {
    return null;
  }
}

export function speichern(stand: Stand): void {
  try {
    localStorage.setItem(SCHLUESSEL, JSON.stringify(stand));
  } catch {
    // Speicher gesperrt oder voll: Der Test läuft weiter, nur ohne Sicherung.
  }
}

export function loeschen(): void {
  try {
    localStorage.removeItem(SCHLUESSEL);
  } catch {
    // siehe speichern()
  }
}
