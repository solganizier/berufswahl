# Übergabe – wo wir stehen

**Stand: 30.09.2026, erste Sitzung.** Zuerst lesen, am Ende jeder
Sitzung fortschreiben.

## Was es gibt

- **Der Entwurf (Stufe 2) steht** (30.09.2026): Startseite, Fragebogen
  in Richtung A mit **zwölf Beispielfragen**, Interessenprofil als
  Ergebnis. Der Stand bleibt auf dem Gerät, Weitermachen nach dem
  Schließen klappt, Zurück zeigt die gegebene Antwort, Tasten 1–5 am
  Rechner. Im Browser geprüft: 320, 390 und 1280 px, hell und dunkel,
  13 Prüfpunkte ohne Befund. Für Max im Browser:
  https://claude.ai/artifact/VuBKKd6AXZA1sTbzmbMndD (privat)
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
   - Die echten Interessenfragen einsetzen (nach der Lizenzakte)
   - Eigenes Erscheinungsbild – als Scribble mit zwei bis drei
     Richtungen, Max wählt. Bis dahin die schlichte Scribble-Palette
   - Werte-Teil und Erfahrungsteil (drei Stufen: nie · gelegentlich ·
     regelmäßig), beide in Form A
   - Berufsdaten: O*NET-Profile über die ESCO-Überleitung auf deutsche
     Namen (E12), dann Abgleich und Distanz zum heutigen Beruf (E10)
   - Das KI-Gespräch folgt als zweiter Schritt (E4, E11)
5. **Wohin ausliefern:** Noch offen. Die Websites liegen bei Febas unter
   einem Auftragsverarbeitungsvertrag – ob die App dort eine eigene
   Vorschau-Subdomain bekommt, entscheidet Max

## Offen

- **Anrede in der App:** „du" oder „Sie"? Bei Berufstätigen nicht
  selbstverständlich – vor dem ersten Text zu klären
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
