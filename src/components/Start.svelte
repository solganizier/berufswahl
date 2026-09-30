<script lang="ts">
  // Die Startseite. Texte sind Platzhalter – was hier steht, entscheidet Max.
  interface Props {
    gesamt: number;
    /** Wie weit ein gespeicherter Durchgang schon ist (0 = keiner) */
    position: number;
    onbeginnen: () => void;
    onweiter: () => void;
  }
  let { gesamt, position, onbeginnen, onweiter }: Props = $props();

  const angefangen = $derived(position > 0);
  const fertig = $derived(position >= gesamt);
</script>

<main class="seite start">
  <p class="kicker">Traumjobfinder · Entwurf</p>
  <h1>Welche Berufe passen zu Ihnen?</h1>
  <p class="vorspann">
    Sie beantworten Fragen zu Ihren Interessen, Ihren Werten und Ihrer Berufserfahrung.
    Daraus entsteht eine Liste von Berufen, die zu Ihnen passen – und wie weit der Weg
    von Ihrem heutigen Beruf dorthin ist.
  </p>

  <ol class="ablauf">
    <li><strong>Interessen</strong><span>in diesem Entwurf: {gesamt} Beispielfragen</span></li>
    <li><strong>Werte</strong><span>folgt</span></li>
    <li><strong>Berufserfahrung</strong><span>folgt</span></li>
    <li><strong>Ihre Berufe und der Weg dorthin</strong><span>folgt</span></li>
  </ol>

  <p class="datenschutz">Ihre Antworten bleiben auf diesem Gerät. Es gibt kein Konto, und nichts wird übertragen.</p>

  <p class="hinweis" role="note">
    <strong>Entwurf.</strong> Die Fragen sind Beispiele, nicht der echte Test. Das Ergebnis sagt deshalb noch nichts aus.
  </p>

  <div class="knoepfe">
    {#if angefangen}
      <button type="button" class="knopf haupt" onclick={onweiter}>
        {fertig ? "Zum Ergebnis" : `Weitermachen bei Frage ${position + 1} von ${gesamt}`}
      </button>
      <button type="button" class="knopf neben" onclick={onbeginnen}>Von vorn beginnen</button>
    {:else}
      <button type="button" class="knopf haupt" onclick={onbeginnen}>Test beginnen</button>
    {/if}
  </div>
</main>

<style>
  h1 {
    margin: 0 0 var(--raum-m);
    font-size: var(--text-xl);
  }
  .vorspann { margin: 0 0 var(--raum-l); }

  .ablauf {
    list-style: none;
    counter-reset: schritt;
    margin: 0 0 var(--raum-l);
    padding: 0;
    display: grid;
    gap: var(--raum-s);
  }
  .ablauf li {
    counter-increment: schritt;
    display: grid;
    grid-template-columns: 2rem 1fr;
    column-gap: var(--raum-s);
    align-items: baseline;
  }
  .ablauf li::before {
    content: counter(schritt);
    grid-row: span 2;
    align-self: start;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid var(--rahmen);
    font-size: var(--text-s);
    font-variant-numeric: tabular-nums;
  }
  .ablauf span { font-size: var(--text-s); color: var(--tinte-2); }

  .datenschutz { margin: 0 0 var(--raum-m); color: var(--tinte-2); }

  .knoepfe {
    margin-top: auto;
    padding-top: var(--raum-l);
    display: grid;
    gap: var(--raum-s);
  }
</style>
