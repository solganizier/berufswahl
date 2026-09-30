#!/bin/bash
#
# Läuft bei jedem Sitzungsstart. Zwei Aufgaben:
#
#   1. die Hooks aus `.githooks/` scharf schalten
#   2. den Stand VOR dieser Sitzung unter einem Namen festnageln
#
# ── 1 · Warum core.hooksPath ──────────────────────────────────────────
#
# Git sucht seine Hooks standardmäßig in `.git/hooks/`, und dieses
# Verzeichnis wird NICHT mitgeklont. `core.hooksPath` zeigt git auf das
# versionierte Verzeichnis im Repository. Dadurch greift
# `.githooks/pre-push`: kein force-push und kein Löschen auf `main`.
#
# ── 2 · Warum ein Sicherungszweig ─────────────────────────────────────
#
# Solange etwas committet war, ist jede Fassung wiederholbar. Die Lücke:
# Beschädigt eine Sitzung `main`, gibt es keinen benannten Stand mehr,
# auf den man zeigen kann. Ein Zweig `sicherung/<Zeitstempel>` auf dem
# Stand vor der Sitzung schließt das. Er kostet nichts (ein Zweig ist
# nur ein Zeiger), und niemand pusht je darauf.
#
# SPARSAM: Angelegt wird nur, wenn noch kein Sicherungszweig auf
# denselben Commit zeigt.
#
# Der Sitzungsstart wartet nie länger als rund 40 Sekunden, und ein
# Fehlschlag hält ihn nie auf (`exit 0` am Ende, immer).

set -uo pipefail

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

# ── 1 · Hooks scharf schalten ────────────────────────────────────────
if [ "$(git config core.hooksPath 2>/dev/null)" != ".githooks" ]; then
  git config core.hooksPath .githooks 2>/dev/null \
    && echo "Git-Hooks aus .githooks/ aktiviert (Schutz für main)." \
    || echo "Hinweis: core.hooksPath konnte nicht gesetzt werden – main ist ungeschützt."
fi

# ── 2 · Den Stand vor dieser Sitzung festnageln ──────────────────────
sicherung_anlegen() {
  if ! timeout 20 git fetch --quiet origin main 2>/dev/null; then
    echo "Sicherung: origin nicht erreichbar – kein Sicherungszweig angelegt."
    return 1
  fi

  local stand
  stand="$(git rev-parse origin/main 2>/dev/null)" || return 1

  local vorhanden
  vorhanden="$(git ls-remote --heads origin 'refs/heads/sicherung/*' 2>/dev/null \
               | awk -v s="$stand" '$1 == s { print $2; exit }')"
  if [ -n "$vorhanden" ]; then
    echo "Sicherung: Stand liegt bereits auf ${vorhanden#refs/heads/}."
    return 0
  fi

  local name="sicherung/$(date -u +%Y-%m-%d-%H%M)"

  # Ref-only-Push: Der Commit existiert auf origin bereits, es werden
  # keine Objekte übertragen.
  if timeout 20 git push --quiet origin "$stand:refs/heads/$name" 2>/dev/null; then
    echo "Sicherung: Stand vor dieser Sitzung liegt auf $name (${stand:0:7})."
  else
    echo "Sicherung: Zweig $name konnte nicht gepusht werden – Stand NICHT gesichert."
    return 1
  fi
}

sicherung_anlegen

exit 0
