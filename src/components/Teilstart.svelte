<script lang="ts">
  // Die kurze Einleitung vor jedem Testteil – sagt, worum es geht und wie
  // lange es dauert, bevor die erste Frage kommt.
  import { TEILE, type Teil } from "../lib/ablauf";

  interface Props {
    teil: Teil;
    teilNr: number;
    onweiter: () => void;
    onzurueck: () => void;
    onpause: () => void;
  }
  let { teil, teilNr, onweiter, onzurueck, onpause }: Props = $props();

  let ueberschrift = $state<HTMLElement>();
  $effect(() => {
    teil.id;
    ueberschrift?.focus();
  });

  // Rund zehn Sekunden je Frage, aufgerundet auf volle Minuten
  const minuten = $derived(Math.max(1, Math.ceil((teil.fragen.length * 10) / 60)));
</script>

<main class="seite teilstart">
  <div class="kopfzeile">
    <p class="zaehler">Teil {teilNr} von {TEILE.length}</p>
    <button type="button" class="textknopf" onclick={onpause}>Pause</button>
  </div>

  <div class="mitte">
    <h1 tabindex="-1" bind:this={ueberschrift}>{teil.titel}</h1>
    <p class="einleitung">{teil.einleitung}</p>
    <p class="umfang">{teil.fragen.length} Fragen · etwa {minuten} {minuten === 1 ? "Minute" : "Minuten"}</p>
  </div>

  <div class="knoepfe">
    <button type="button" class="knopf haupt" onclick={onweiter}>Weiter</button>
    {#if teilNr > 1}
      <button type="button" class="textknopf" onclick={onzurueck}>Zurück</button>
    {/if}
  </div>
</main>

<style>
  .kopfzeile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .zaehler { margin: 0; font-size: var(--text-s); color: var(--tinte-2); }

  .mitte { margin-block: auto; padding-block: var(--raum-xl); }
  h1 { margin: 0 0 var(--raum-m); font-size: var(--text-xl); }
  .einleitung { margin: 0 0 var(--raum-m); font-size: var(--text-l); line-height: 1.4; }
  .umfang { margin: 0; color: var(--tinte-2); }

  .knoepfe { display: grid; gap: var(--raum-s); justify-items: stretch; }
  .knoepfe .textknopf { justify-self: start; }
</style>
