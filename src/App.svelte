<script lang="ts">
  // Der Ablauf: Start → drei Testteile → Ausschlüsse → Ergebnis. Kein
  // Router: Eine Position zeigt auf einen Schritt in SCHRITTE, der Stand
  // liegt auf dem Gerät.
  import Start from "./components/Start.svelte";
  import Teilstart from "./components/Teilstart.svelte";
  import Fragebogen from "./components/Fragebogen.svelte";
  import Ausschluesse from "./components/Ausschluesse.svelte";
  import Ergebnis from "./components/Ergebnis.svelte";
  import { SCHRITTE, type Ausschluss } from "./lib/ablauf";
  import { BEISPIEL_ANTWORTEN, BEISPIEL_AUSSCHLUESSE } from "./lib/beispiel";
  import { laden, loeschen, neuerStand, speichern, type Stand } from "./lib/speicher";

  let stand = $state<Stand>(laden() ?? neuerStand());
  let aufStart = $state(true);

  const fertig = $derived(stand.position >= SCHRITTE.length);
  const schritt = $derived(SCHRITTE[stand.position]);

  function sichern() {
    speichern($state.snapshot(stand));
  }
  function gehe(position: number) {
    stand.position = Math.max(0, Math.min(SCHRITTE.length, position));
    sichern();
  }

  function beginnen() {
    stand = neuerStand();
    sichern();
    aufStart = false;
  }
  function weitermachen() {
    aufStart = false;
  }
  function beispielZeigen() {
    stand = {
      ...neuerStand(),
      antworten: { ...BEISPIEL_ANTWORTEN },
      ausschluesse: [...BEISPIEL_AUSSCHLUESSE],
      position: SCHRITTE.length,
      beispiel: true,
    };
    // Die Beispielperson wird nicht gespeichert – ein eigener Durchgang bleibt unberührt.
    aufStart = false;
  }

  function antworten(wert: number) {
    if (schritt?.art !== "frage") return;
    stand.antworten[schritt.frage.id] = wert;
    gehe(stand.position + 1);
  }
  function ausschluesseFertig(auswahl: Ausschluss[]) {
    stand.ausschluesse = auswahl;
    gehe(SCHRITTE.length);
  }
  function aendern() {
    gehe(SCHRITTE.length - 1);
  }
  function vonVorn() {
    loeschen();
    stand = neuerStand();
    aufStart = true;
  }
  /** Zurück aus der Beispielansicht: der eigene Stand, wie er gespeichert war. */
  function beispielVerlassen() {
    stand = laden() ?? neuerStand();
    aufStart = true;
  }
  function pause() {
    if (stand.beispiel) return beispielVerlassen();
    aufStart = true;
  }

  // Jede neue Ansicht beginnt oben.
  $effect(() => {
    stand.position;
    aufStart;
    window.scrollTo(0, 0);
  });
</script>

{#if aufStart}
  <Start
    position={stand.beispiel ? 0 : stand.position}
    fertig={fertig && !stand.beispiel}
    onbeginnen={beginnen}
    onweiter={weitermachen}
    onbeispiel={beispielZeigen}
  />
{:else if fertig}
  <Ergebnis
    antworten={stand.antworten}
    ausschluesse={stand.ausschluesse}
    beispiel={stand.beispiel}
    onaendern={aendern}
    onneu={stand.beispiel ? beispielVerlassen : vonVorn}
  />
{:else if schritt.art === "teilstart"}
  <Teilstart
    teil={schritt.teil}
    teilNr={schritt.teilNr}
    onweiter={() => gehe(stand.position + 1)}
    onzurueck={() => gehe(stand.position - 1)}
    onpause={pause}
  />
{:else if schritt.art === "frage"}
  <Fragebogen
    teil={schritt.teil}
    teilNr={schritt.teilNr}
    frage={schritt.frage}
    nummer={schritt.nummer}
    gewaehlt={stand.antworten[schritt.frage.id]}
    onantwort={antworten}
    onzurueck={() => gehe(stand.position - 1)}
    onpause={pause}
  />
{:else}
  <Ausschluesse
    gewaehlt={stand.ausschluesse}
    onfertig={ausschluesseFertig}
    onzurueck={() => gehe(stand.position - 1)}
    onpause={pause}
  />
{/if}
