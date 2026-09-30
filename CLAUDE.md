# berufswahl – Arbeitskontext für Claude

**Traumjobfinder** (Arbeitstitel, 30.09.2026): eine Web-App, die
Berufstätigen hilft, einen Beruf zu finden, der zu ihnen passt – auch
einen, an den sie nie gedacht hätten.

Auftraggeber ist Max Beier (DAS KREAKTIV, Leipzig). Max ist Redakteur,
kein Entwickler und kein Designer – Technik und Gestaltung liegen bei
Claude, Inhalte und Entscheidungen bei Max. Gesprächssprache Deutsch,
Commit-Botschaften auf Deutsch.

> Diese Datei wird bei **jedem** Sitzungsstart geladen. Sie trägt nur,
> was bei jeder Aufgabe gilt. Der Arbeitsstand steht in
> `docs/uebergabe.md`, die Entscheidungen in `docs/entscheidungen.md`.

## Eigenständig – keine Verbindung zu `webdesign`

Max' zweites Repository `solganizier/webdesign` trägt sechs Websites.
**Dieses Projekt teilt damit nichts** (Max, 30.09.2026: „auf keinen
Fall mit den Webdesign-Projekten kollidieren"):

| | gilt hier |
|---|---|
| Dateien, Bauteile, Skripte | **nichts** aus `webdesign` übernehmen oder verlinken |
| Marke | **keine** – kein Petrol `#135E63`, keine IBM Plex Sans, keine Männchen. Die App bekommt ein eigenes Erscheinungsbild |
| Auslieferung | eigene Workflows, eigene Secrets, eigene Domain – wenn es so weit ist |
| Lokale Vorschau | **Port 4400**. `webdesign` belegt 4321–4326 |
| Auf Max' Rechner | eigener Ordner **neben** `webdesign`, nie darin |
| Regeln | Was in `webdesign/CLAUDE.md` steht, gilt hier nur, wenn es **hier** steht |

Die Agenten aus `webdesign` (Content-Conny, Layout-Lars, Farb-Finja …)
liegen dort in `.claude/agents/` und stehen in Sitzungen **dieses**
Repositories nicht zur Verfügung.

## Wo die Wahrheit liegt (in dieser Reihenfolge lesen)

0. `docs/uebergabe.md` – **wo wir stehen, was als Nächstes ansteht.**
   Zuerst lesen, am Ende fortschreiben
1. `docs/entscheidungen.md` – alle Entscheidungen mit Datum und Grund
2. `docs/recherche/` – das belegte Fundament: Tests, Berufsdaten,
   Forschung, Markt, Recht
3. `docs/entwuerfe/` – Scribbles, zwischen denen Max gewählt hat

## Technik

Vite, Svelte 5 (Runes), TypeScript – kein Server, keine Datenbank. Der
Stand der Person liegt im Speicher ihres Browsers (`src/lib/speicher.ts`).

| Befehl | wofür |
|---|---|
| `npm run dev` | Vorschau auf http://localhost:4400 |
| `npm run check` | Typen und Svelte prüfen – **vor jedem Push fehlerfrei** |
| `npm run build` | Bau nach `dist/` – **vor jedem Push fehlerfrei** |
| `npm run artefakt -- <datei.html>` | eine Datei für die Browseransicht auf claude.ai, damit Max unterwegs schauen kann |

Max' Vorschau: `vorschau-berufswahl.cmd` per Doppelklick. Max nie auf
die Kommandozeile verweisen, wenn er nur die App sehen will.

Die Auswertung (`src/lib/auswertung.ts`) sind reine Funktionen ohne
Oberfläche. Fragen und Berufe liegen getrennt davon in
`src/lib/interessen.ts`, `werte.ts`, `erfahrung.ts` und `berufe.ts` –
**dort und nur dort** werden die Beispieldaten gegen die echten
getauscht (Tabelle in `docs/uebergabe.md`). Alle Farben sind Tokens in `src/styles/tokens.css`, mit
Dunkelmodus und belegten Kontrasten; Bauteile greifen nur über `var(--…)`
darauf zu.

## Der feste Ort: `main`

**Der aktuelle Stand liegt immer auf `main`.** Gearbeitet wird auf dem
Sitzungszweig, **am Ende jeder Sitzung wird nach `main` zurückgeführt**
– vorher `git fetch`, denn jede Sitzung kennt nur den Stand ihres
Starts.

**Auf `main` wird nie mit Gewalt gepusht.** Kein `--force`, kein
`--force-with-lease`, kein `--no-verify`. Durchgesetzt wird das von
`.githooks/pre-push`; `core.hooksPath` setzt der Sitzungshook
`.claude/hooks/session-start.sh`. Ein Zweigschutz bei GitHub greift
nicht (privates Repository auf einem persönlichen Konto).

## Fachliche Leitplanken

- **Gemessen wird nur mit validierten Instrumenten**, deren Lizenz
  geklärt und in `docs/recherche/` belegt ist. Selbst ausgedachte
  Testfragen wirken tiefgründig, messen aber nichts
- **Schwächen verschlechtern die Passung, schließen aber nicht aus.**
  Ausschließen dürfen nur harte Grenzen (etwa eine körperliche
  Einschränkung oder ein gesetzlich vorgeschriebener Abschluss)
- **Nichts versprechen, was die Tests nicht halten.** Die App schlägt
  vor und begründet – sie weiß nicht, was jemandes Traumjob ist
- **Die Ergebnisse bleiben auf dem Gerät.** Was im KI-Gespräch an einen
  Anbieter geht, erfährt die Person, bevor es losgeht

## Arbeitsweise: erst Scribble, dann Reinzeichnung

| Stufe | Was | Wer entscheidet |
|---|---|---|
| **1 · Scribble** | Mehrere Richtungen grob, als HTML in `docs/entwuerfe/` | **Max wählt** |
| **2 · Entwurf** | Die gewählte Richtung in die App, an einer Stelle | Max sieht es und korrigiert |
| **3 · Reinzeichnung** | Ausrollen, Mobil und Kontraste prüfen, Doku fortschreiben | – |

**Nach Stufe 1 wird angehalten und gefragt.** Aufträge klein schneiden;
Max kann jederzeit dazwischenreden. Auch im Scribble werden Kontraste
gerechnet, und ein Build muss fehlerfrei laufen.

## Fragen an Max stehen am Schluss, abgesetzt

Max liest von unten nach oben, wenn er wissen will, was zu tun ist.
Jede Antwort, die etwas von ihm will, endet mit:

```
---

## ► Was ich von dir brauche

**1 · <Sache in drei bis fünf Wörtern>**
<Ein Satz: worum es geht.> <Ein Satz: was die Wahl kostet.>
**Meine Empfehlung:** <…> – **deine Entscheidung?**
```

Höchstens drei Fragen, jede für sich lesbar, jede mit Empfehlung. Nichts
zu fragen – dann steht der Block nicht da. Für echte Entscheidungen mit
klaren Alternativen ist das Frage-Werkzeug mit anklickbaren Optionen der
bessere Weg. **Gestaltungsfragen kommen mit Bild**, nicht mit Zahlen.

## Feste Regeln

- **Gedankenstrich:** Im sichtbaren Text steht der Halbgeviertstrich
  `–` mit Leerzeichen, nie `—` und nie `-`. Bis-Strich `60–90` ohne
  Leerzeichen. Code-Kommentare sind ausgenommen
- **Barrierefreiheit:** WCAG 2.2 AA ist Untergrenze, nicht Ziel
- **Farben** werden gerechnet und im Token-Kommentar belegt, in beiden
  Schemata, falls es einen Dunkelmodus gibt
- **Texte in der App entscheidet Max.** Eingebaut wird nur, was er wählt
