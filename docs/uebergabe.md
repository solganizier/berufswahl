# Übergabe – wo wir stehen

**Stand: 30.09.2026, erste Sitzung.** Zuerst lesen, am Ende jeder
Sitzung fortschreiben.

## Was es gibt

- Die Idee und acht Entscheidungen (`entscheidungen.md`)
- Die Grundstruktur des Repositories: `CLAUDE.md`, Schutz für `main`
  (`.githooks/pre-push` und `.claude/hooks/session-start.sh`), diese
  Übergabe
- **Das Fundament:** `recherche/2026-09-30-fundament.md` (Content-Conny).
  Testinstrumente, Berufsverzeichnis, Forschung zum Abgleich, Markt,
  Recht – mit 67 Quellen
- **Noch kein Code.** Welche Technik die App bekommt, entscheidet
  Claude nach dem Scribble

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
3. **Scribble:** drei Wege, wie sich der Test anfühlen kann – Fragebogen
   Schritt für Schritt, Karten sortieren („mag ich / mag ich nicht"),
   Gespräch mit eingebetteten Fragen. Max wählt
4. **Erste Version:** Tests, Abgleich, Ergebnisseite. Das KI-Gespräch
   folgt als zweiter Schritt (E4)

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
