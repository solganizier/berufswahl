<script lang="ts">
  // Richtung A (E13): eine Frage je Bildschirm, weiter mit einem Tipp.
  // Gilt für alle Testteile; nur Kopfzeile und Antwortstufen wechseln.
  import { TEILE, type Frage, type Teil } from "../lib/ablauf";

  interface Props {
    teil: Teil;
    teilNr: number;
    frage: Frage;
    nummer: number;
    /** Die schon gegebene Antwort, wenn jemand zurückgeht */
    gewaehlt: number | undefined;
    onantwort: (wert: number) => void;
    onzurueck: () => void;
    onpause: () => void;
  }
  let { teil, teilNr, frage, nummer, gewaehlt, onantwort, onzurueck, onpause }: Props = $props();

  const stufen = $derived(teil.skala.stufen);
  let ueberschrift = $state<HTMLElement>();

  // Neue Frage: Fokus auf die Aussage, damit Bildschirmleser sie vorlesen
  // und die Tastatur oben weitermacht.
  $effect(() => {
    frage.id;
    ueberschrift?.focus();
  });

  function taste(e: KeyboardEvent) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.repeat) return;
    const n = Number(e.key);
    if (Number.isInteger(n) && n >= 1 && n <= stufen.length) {
      e.preventDefault();
      onantwort(stufen[n - 1].wert);
    }
  }
</script>

<svelte:window onkeydown={taste} />

<main class="seite fragebogen">
  <div class="kopfzeile">
    <p class="zaehler">
      <span class="teil">Teil {teilNr} von {TEILE.length} · {teil.titel}</span>
      <span>Frage {nummer} von {teil.fragen.length}</span>
    </p>
    <button type="button" class="textknopf" onclick={onpause}>Pause</button>
  </div>
  <div class="fortschritt" aria-hidden="true">
    <span style:width="{((nummer - 1) / teil.fragen.length) * 100}%"></span>
  </div>

  <p class="frage-kopf">{teil.kopf}</p>
  <h1 class="aussage" tabindex="-1" bind:this={ueberschrift}>{frage.text}</h1>

  <div class="skala" role="group" aria-label={teil.kopf}>
    {#each stufen as stufe, i (stufe.wert)}
      <button
        type="button"
        class="stufe"
        aria-pressed={gewaehlt === stufe.wert}
        onclick={() => onantwort(stufe.wert)}
      >
        <span class="taste" aria-hidden="true">{i + 1}</span>
        {stufe.text}
      </button>
    {/each}
  </div>

  <div class="fusszeile">
    <button type="button" class="textknopf" onclick={onzurueck}>Zurück</button>
    <p class="tipp">Tipp: Tasten 1 bis {stufen.length}</p>
  </div>
</main>

<style>
  .kopfzeile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--raum-m);
  }
  .zaehler {
    margin: 0;
    display: grid;
    font-size: var(--text-s);
    color: var(--tinte-2);
    font-variant-numeric: tabular-nums;
  }
  .zaehler .teil { color: var(--tinte); }

  .fortschritt {
    height: 6px;
    margin-top: var(--raum-xs);
    background: var(--spur);
    border-radius: 3px;
    overflow: hidden;
  }
  .fortschritt span {
    display: block;
    height: 100%;
    background: var(--akzent-flaeche);
    transition: width 0.25s ease;
  }

  .frage-kopf {
    margin: var(--raum-xl) 0 var(--raum-s);
    color: var(--tinte-2);
  }
  .aussage {
    margin: 0 0 var(--raum-l);
    font-size: var(--text-l);
    font-weight: 600;
    /* drei Zeilen Platz, damit die Knöpfe bei kurzen und langen
       Aussagen an derselben Stelle stehen */
    min-height: 3.6em;
  }

  .skala {
    display: grid;
    gap: var(--raum-s);
    margin-top: auto; /* Handy: Antworten unten, wo der Daumen ist */
  }
  /* Breite Bildschirme: Antworten direkt unter der Frage, sonst reißt
     eine Lücke zwischen beidem auf */
  @media (min-width: 40rem) {
    .skala { margin-top: 0; }
  }
  .stufe {
    min-height: 3.25rem;
    display: flex;
    align-items: center;
    gap: var(--raum-m);
    padding: 0 var(--raum-m);
    border: 1px solid var(--rahmen);
    border-radius: var(--radius);
    background: var(--flaeche);
    text-align: left;
  }
  .stufe:hover { background: var(--akzent-hell); }
  .stufe[aria-pressed="true"] {
    background: var(--akzent-hell);
    border: 2px solid var(--akzent);
    padding-inline: calc(var(--raum-m) - 1px);
    font-weight: 600;
  }
  .taste {
    width: 1.75rem;
    height: 1.75rem;
    flex: none;
    display: grid;
    place-items: center;
    border-radius: 0.375rem;
    background: var(--spur);
    font-size: var(--text-s);
    font-variant-numeric: tabular-nums;
    color: var(--tinte-2);
  }

  .fusszeile {
    min-height: 2.75rem;
    margin-top: var(--raum-s);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tipp {
    display: none;
    margin: 0 0 0 auto;
    font-size: var(--text-s);
    color: var(--tinte-2);
  }
  /* Nur wo es eine Tastatur mit Maus gibt, nicht auf dem Handy */
  @media (hover: hover) and (pointer: fine) {
    .tipp { display: block; }
  }
</style>
