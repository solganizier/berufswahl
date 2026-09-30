<script lang="ts">
  // Der Ablauf: Start → Fragebogen → Ergebnis. Kein Router – drei
  // Ansichten, ein Zustand, gespeichert auf dem Gerät.
  import Start from "./components/Start.svelte";
  import Fragebogen from "./components/Fragebogen.svelte";
  import Ergebnis from "./components/Ergebnis.svelte";
  import { FRAGEN } from "./lib/fragen";
  import { interessenProfil } from "./lib/auswertung";
  import { laden, loeschen, neuerStand, speichern, type Stand } from "./lib/speicher";

  let stand = $state<Stand>(laden() ?? neuerStand());
  let ansicht = $state<"start" | "fragebogen" | "ergebnis">("start");

  const profil = $derived(interessenProfil(stand.antworten, FRAGEN));

  function sichern() {
    speichern($state.snapshot(stand));
  }

  function beginnen() {
    stand = neuerStand();
    sichern();
    ansicht = "fragebogen";
  }

  function weitermachen() {
    ansicht = stand.position >= FRAGEN.length ? "ergebnis" : "fragebogen";
  }

  function antworten(wert: number) {
    stand.antworten[FRAGEN[stand.position].id] = wert;
    stand.position += 1;
    sichern();
    if (stand.position >= FRAGEN.length) ansicht = "ergebnis";
  }

  function zurueck() {
    if (stand.position > 0) stand.position -= 1;
    sichern();
  }

  function aendern() {
    stand.position = FRAGEN.length - 1;
    sichern();
    ansicht = "fragebogen";
  }

  function vonVorn() {
    loeschen();
    stand = neuerStand();
    ansicht = "start";
  }

  // Jede neue Ansicht beginnt oben.
  $effect(() => {
    ansicht;
    window.scrollTo(0, 0);
  });
</script>

{#if ansicht === "start"}
  <Start gesamt={FRAGEN.length} position={stand.position} onbeginnen={beginnen} onweiter={weitermachen} />
{:else if ansicht === "fragebogen"}
  {@const frage = FRAGEN[stand.position]}
  <Fragebogen
    {frage}
    nummer={stand.position + 1}
    gesamt={FRAGEN.length}
    gewaehlt={stand.antworten[frage.id]}
    onantwort={antworten}
    onzurueck={zurueck}
    onpause={() => (ansicht = "start")}
  />
{:else}
  <Ergebnis {profil} onaendern={aendern} onneu={vonVorn} />
{/if}
