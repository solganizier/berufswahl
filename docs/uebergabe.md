# Übergabe – wo wir stehen

**Stand: 30.09.2026, erste Sitzung.** Zuerst lesen, am Ende jeder
Sitzung fortschreiben.

## Was es gibt

- **Die Vorschau des ganzen Ablaufs steht** (30.09.2026, auf Max'
  Wunsch „als ob die Lizenzen frei wären"):
  Start → Interessen (12) → Werte (6) → Erfahrung (11, drei Stufen) →
  harte Grenzen → **Berufsliste mit Passung und Weg**, Begründung je
  Beruf („Das bringen Sie mit", „Das wäre neu"), umschaltbar nach
  „Beste Passung" / „Kürzester Weg". Dazu eine **Beispielperson**
  (Sachbearbeiterin, 44), die das Ergebnis ohne 29 Klicks zeigt und den
  eigenen Stand nicht berührt. Im Browser geprüft: 18 Prüfpunkte,
  320/390/1280 px, hell und dunkel, ohne Befund. Für Max:
  https://claude.ai/artifact/VuBKKd6AXZA1sTbzmbMndD (privat)
- **Was davon Beispiel ist – und wo das Echte hineinkommt:**

  | Beispiel | wird ersetzt durch | Stelle |
  |---|---|---|
  | 12 Interessenfragen | deutsche O*NET-IP-Kurzform, 60 Fragen | `src/lib/interessen.ts` |
  | 6 Werteaussagen | Übersetzung des O*NET WIP | `src/lib/werte.ts` |
  | 11 grobe Tätigkeiten | aus O*NET-Arbeitsaktivitäten bzw. ESCO | `src/lib/erfahrung.ts` |
  | 30 Berufe, Profile geschätzt | O*NET 31.0 über die ESCO-Überleitung | `src/lib/berufe.ts` |

  Die Auswertung (`src/lib/auswertung.ts`) bleibt – sie braucht nur je
  Frage einen `schluessel` und je Beruf die Profile. **Die Fachseiten
  waren am 30.09.2026 von hier aus weiter gesperrt**; die echten Daten
  kommen, sobald sie erreichbar sind
- **Setzungen, im Pilot zu prüfen** (alle in `auswertung.ts` begründet):
  Passung = 70 % Interessen + 30 % Werte, je als Profilkorrelation;
  Passung „hoch" ab 0,85, „mittel" ab 0,7; Weg „nah" ab 75 % mitgebrachter
  Kerntätigkeiten, „mittel" ab 40 % (gelegentlich zählt halb)
- **Alle Texte in der App sind Platzhalter.** Was dort steht, entscheidet
  Max (E14: gesiezt)

- Die Idee und vierzehn Entscheidungen (`entscheidungen.md`)
- Die Grundstruktur des Repositories: `CLAUDE.md`, Schutz für `main`
  (`.githooks/pre-push` und `.claude/hooks/session-start.sh`), diese
  Übergabe
- **Das Fundament:** `recherche/2026-09-30-fundament.md` (Content-Conny).
  Testinstrumente, Berufsverzeichnis, Forschung zum Abgleich, Markt,
  Recht – mit 67 Quellen
- **Technik:** Vite, Svelte 5, TypeScript (siehe `CLAUDE.md`)

## Was die Recherche ergeben hat, in fünf Sätzen

1. **Die Tests sind lösbar**, frei nutzbar auch kommerziell: deutsche
   Kurzform des O*NET Interest Profiler (60 Fragen), IPIP-Big-Five,
   O*NET-Arbeitswerte (selbst zu übersetzen), dazu eine Abfrage
   ausgeübter Tätigkeiten statt Selbstnoten
2. **Der Engpass sind deutsche Berufsprofile.** Frei gibt es sie nicht;
   der Weg führt über die US-Datenbank O*NET und die offizielle
   Überleitung auf die europäischen ESCO-Berufe – mit Unschärfe
3. **Die Wirkung ist bescheidener, als „tiefgründig" klingt.**
   Interessen-Passung sagt Zufriedenheit nur schwach voraus (ρ ≈ .19),
   Werkzeuge ohne Menschen wirken schwächer. Die App schlägt vor und
   erklärt – sie weiß nicht, was der Traumjob ist
4. **New Plan der Arbeitsagentur** ist kostenlos, ohne Konto, für
   Berufstätige – kennt aber kaum jemand (2 %). Die Lücke: Tiefe,
   Erklärung, Reichweite, und die **Distanz zum jetzigen Beruf**
5. **Das KI-Gespräch hebt „bleibt auf dem Gerät" auf**, sobald ein
   Cloud-Anbieter im Spiel ist: Auftragsverarbeitung, Einwilligung,
   Datenschutz-Folgenabschätzung. Hinweis „hier spricht eine KI" ist
   seit 02.08.2026 Pflicht

## Was als Nächstes ansteht

1. ~~Max entscheidet über drei Punkte aus der Recherche~~ – erledigt
   am 30.09.2026: E9 kommerziell planen, E10 Distanz als Kern, E11
   KI-Gespräch zuschaltbar in der EU. Dazu E12 Berufsverzeichnis
2. **Lizenzakte anlegen**, bevor eine Zeile Code entsteht: jede
   Lizenzseite im Volltext lesen und mit Abrufdatum sichern (O*NET Tools
   Developer License, O*NET Database License, IPIP, ESCO). **Am
   30.09.2026 waren diese Seiten von der Netzwerkeinstellung der
   Web-Umgebung gesperrt** – entweder die Domains freigeben oder Max
   lädt die Seiten selbst
3. ~~Scribble~~ – erledigt am 30.09.2026: Max wählt **A, Fragebogen**
   (E13). Das Scribble liegt in `entwuerfe/2026-09-30-scribble-testgefuehl.html`,
   als Browserseite unter https://claude.ai/artifact/AgPxpdN6EH5CqA8DYqNP1m
   (privat, nur Max)
4. **Erste Version, in dieser Reihenfolge:**
   - Die echten Fragen und Berufsdaten einsetzen (nach der Lizenzakte),
     an den Stellen aus der Tabelle oben
   - Eigenes Erscheinungsbild – als Scribble mit zwei bis drei
     Richtungen, Max wählt. Bis dahin die schlichte Scribble-Palette
   - ~~Werte-Teil, Erfahrungsteil, Abgleich, Distanz~~ – als Vorschau
     gebaut am 30.09.2026, mit Beispieldaten
   - Persönlichkeit (IPIP-Big-Five, E9) ist noch nicht eingeplant: laut
     Recherche kleines Gewicht, eher Stoff fürs KI-Gespräch
   - Das KI-Gespräch folgt als zweiter Schritt (E4, E11)
5. **Wohin ausliefern:** Noch offen. Die Websites liegen bei Febas unter
   einem Auftragsverarbeitungsvertrag – ob die App dort eine eigene
   Vorschau-Subdomain bekommt, entscheidet Max

## Offen

- **Produktname:** Traumjobfinder ist Arbeitstitel. Die Recherche rät
  von Versprechen wie „der richtige Beruf" ab – der Name verspricht
  viel. Vor einer Festlegung außerdem prüfen, was besetzt ist
- **SGB III:** Ob eine App „Berufsberatung" im Rechtssinn betreibt, ist
  ungeklärt (§§ 30, 288a, 289). Relevant, sobald sie auf Max' Angebote
  oder Anbieter mit Provision verweist. Braucht eine Anwaltsauskunft
  oder eine Anfrage bei der Arbeitsagentur
- **BERUFENET-Daten:** Nutzung nur nach schriftlicher Klärung mit der
  Arbeitsagentur – Ausbaustufe, nicht erste Version
- **Agenten:** Content-Conny und die anderen liegen in `webdesign`.
  Ob dieses Projekt eigene bekommt, entscheidet sich, sobald gebaut wird
