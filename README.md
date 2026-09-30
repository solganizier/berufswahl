# Traumjobfinder (Arbeitstitel)

Eine Web-App zur Berufswahl für Berufstätige, die umsteigen oder sich
neu orientieren wollen. Die Person macht Tests zu Interessen,
Persönlichkeit, Werten und Berufserfahrung. Die App gleicht das
Ergebnis mit einem Berufsverzeichnis ab und zeigt, welche Berufe am
besten passen, warum – und wie weit der Weg vom heutigen Beruf dorthin
ist. Danach fragt ein KI-Gespräch nach und erklärt, wenn man es
zuschaltet.

Kostenlos, ohne Konto, die Ergebnisse bleiben auf dem eigenen Gerät.

**Stand:** Entwurf (Stufe 2) – der Fragebogen mit Beispielfragen. Wo es
steht: [`docs/uebergabe.md`](docs/uebergabe.md). Was entschieden ist:
[`docs/entscheidungen.md`](docs/entscheidungen.md).

## Ansehen

**Auf dem eigenen Rechner (Windows):** `vorschau-berufswahl.cmd`
doppelklicken. Holt beim ersten Mal das Projekt nach
`%USERPROFILE%\Projekte\berufswahl`, danach immer den neuesten Stand,
und öffnet http://localhost:4400.

**Für Entwickler:** Node ≥ 22.12, dann

```
npm install
npm run dev        # Vorschau auf http://localhost:4400
npm run check      # Typen und Svelte prüfen
npm run build      # Bau nach dist/
```

Technik: Vite, Svelte 5, TypeScript. Kein Server, keine Datenbank – der
Stand liegt im Speicher des Browsers.

Eigenständiges Projekt von Max Beier (DAS KREAKTIV, Leipzig), ohne
Verbindung zum Repository `webdesign`.
