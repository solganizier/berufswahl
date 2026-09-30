@echo off
setlocal
title Traumjobfinder - Vorschau
REM ===========================================================================
REM  Vorschau des TRAUMJOBFINDERS, per Doppelklick.
REM
REM  Eigenstaendiges Projekt, getrennt von den Websites: eigener Ordner
REM  (Projekte\berufswahl), eigener Port (4400). Die Vorschauen der
REM  Websites laufen auf 4321 bis 4326 - beide koennen gleichzeitig
REM  offen sein.
REM
REM  Holt den neuesten Stand, startet den Vorschau-Server und oeffnet den
REM  Browser. Liegt das Projekt noch nicht auf diesem Rechner, wird es
REM  einmalig geholt. Dieses Fenster ist der laufende Server: einfach
REM  offen lassen. Schliessen beendet die Vorschau.
REM
REM  Absichtlich ohne Umlaute: .cmd-Dateien laufen in einer alten
REM  Zeichentabelle, Umlaute wuerden als Zeichensalat erscheinen.
REM ===========================================================================

set "ZWEIG=main"
set "PORT=4400"

echo.
echo  Traumjobfinder - Vorschau wird vorbereitet ...
echo.

REM --- Werkzeuge vorhanden? --------------------------------------------------
where git >nul 2>nul
if errorlevel 1 (
    echo  Git ist auf diesem Rechner nicht installiert.
    echo  Bitte Claude Bescheid geben: "Git fehlt auf diesem Rechner".
    echo.
    pause
    exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
    echo  Node.js ist auf diesem Rechner nicht installiert.
    echo  Bitte Claude Bescheid geben: "Node fehlt auf diesem Rechner".
    echo.
    pause
    exit /b 1
)

REM --- Projektordner finden --------------------------------------------------
set "REPO="
for %%D in (
    "%USERPROFILE%\Projekte\berufswahl"
    "%USERPROFILE%\berufswahl"
    "%USERPROFILE%\Desktop\berufswahl"
    "%USERPROFILE%\Documents\berufswahl"
    "%USERPROFILE%\Projects\berufswahl"
) do (
    if not defined REPO if exist "%%~D\.git" set "REPO=%%~D"
)

if defined REPO goto gefunden

echo  Projekt liegt noch nicht auf diesem Rechner - wird einmalig geholt.
echo  Das dauert einen Moment ...
echo.
mkdir "%USERPROFILE%\Projekte" 2>nul
git clone https://github.com/solganizier/berufswahl.git "%USERPROFILE%\Projekte\berufswahl"
if errorlevel 1 (
    echo.
    echo  Das Holen hat nicht geklappt. Meist fehlt Internet oder die
    echo  Anmeldung bei GitHub. Diese Meldung bitte Claude zeigen.
    echo.
    pause
    exit /b 1
)
set "REPO=%USERPROFILE%\Projekte\berufswahl"

:gefunden
echo  Projektordner: %REPO%
cd /d "%REPO%"

REM --- Schutz fuer main einschalten ------------------------------------------
REM  git benutzt dann die Hooks aus .githooks/. Der pre-push-Hook lehnt
REM  jeden Push ab, der auf main fremde Arbeit ueberschreiben wuerde.
REM  Harmlos, wenn es schon steht.
git config core.hooksPath .githooks >nul 2>nul

REM --- Neuesten Stand holen --------------------------------------------------
git fetch origin >nul 2>nul
git checkout %ZWEIG% >nul 2>nul
git pull --ff-only origin %ZWEIG%
if errorlevel 1 (
    echo.
    echo  Hinweis: Der neueste Stand liess sich nicht abholen.
    echo  Die Vorschau startet trotzdem - mit dem Stand, der da ist.
    echo.
)

REM --- Bausteine installieren ------------------------------------------------
REM  Bei jedem Start, nicht nur beim ersten: Kommt mit dem neuesten Stand
REM  ein neuer Baustein dazu, fehlt er sonst. Ist alles da, dauert das
REM  nur wenige Sekunden.
echo  Bausteine werden geprueft ...
call npm install --no-audit --no-fund
if errorlevel 1 (
    echo.
    echo  Die Installation hat nicht geklappt. Diese Meldung bitte
    echo  Claude zeigen.
    echo.
    pause
    exit /b 1
)

REM --- Browser oeffnen (verzoegert, damit der Server schon laeuft) ------------
start "" /min cmd /c "timeout /t 4 /nobreak >nul & start http://localhost:%PORT%"

echo.
echo  ===========================================================
echo   Der Browser oeffnet sich gleich von selbst.
echo   Falls nicht: http://localhost:%PORT%
echo.
echo   Dieses Fenster offen lassen - es IST die Vorschau.
echo   Fenster schliessen beendet sie. Neu starten: Doppelklick.
echo  ===========================================================
echo.

call npm run dev
