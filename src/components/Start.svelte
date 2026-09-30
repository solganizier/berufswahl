<script lang="ts">
  // Die Startseite. Texte sind Platzhalter – was hier steht, entscheidet Max.
  import { TEILE } from "../lib/ablauf";
  import { BEISPIEL_NAME } from "../lib/beispiel";

  interface Props {
    /** Wie weit ein gespeicherter Durchgang schon ist (0 = keiner) */
    position: number;
    fertig: boolean;
    onbeginnen: () => void;
    onweiter: () => void;
    onbeispiel: () => void;
  }
  let { position, fertig, onbeginnen, onweiter, onbeispiel }: Props = $props();

  const fragenGesamt = TEILE.reduce((s, t) => s + t.fragen.length, 0);
</script>

<main class="seite start">
  <p class="kicker">Traumjobfinder · Vorschau</p>
  <h1>Welche Berufe passen zu Ihnen?</h1>
  <p class="vorspann">
    Sie beantworten Fragen zu Ihren Interessen, zu dem, was Ihnen wichtig ist, und zu dem, was Sie
    schon getan haben. Daraus entsteht eine Liste von Berufen, die zu Ihnen passen – und wie weit
    der Weg dorthin ist.
  </p>

  <ol class="ablauf">
    {#each TEILE as teil (teil.id)}
      <li><strong>{teil.titel}</strong><span>{teil.fragen.length} Fragen</span></li>
    {/each}
    <li><strong>Ihre Berufe und der Weg dorthin</strong><span>mit Begründung</span></li>
  </ol>

  <p class="datenschutz">Ihre Antworten bleiben auf diesem Gerät. Es gibt kein Konto, und nichts wird übertragen.</p>

  <p class="hinweis" role="note">
    <strong>Vorschau.</strong> Fragen und Berufsdaten sind Beispiele. So funktioniert die App – was
    sie Ihnen empfiehlt, sagt noch nichts aus.
  </p>

  <div class="knoepfe">
    {#if position > 0}
      <button type="button" class="knopf haupt" onclick={onweiter}>
        {fertig ? "Zu Ihrem Ergebnis" : "Weitermachen, wo Sie aufgehört haben"}
      </button>
      <button type="button" class="knopf neben" onclick={onbeginnen}>Von vorn beginnen</button>
    {:else}
      <button type="button" class="knopf haupt" onclick={onbeginnen}>Test beginnen · {fragenGesamt} Fragen</button>
    {/if}
    <button type="button" class="textknopf beispiel" onclick={onbeispiel}>
      Ergebnis einer Beispielperson ansehen
    </button>
    <p class="beispiel-wer">{BEISPIEL_NAME}</p>
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
  .beispiel { justify-self: center; margin-top: var(--raum-xs); }
  .beispiel-wer {
    margin: calc(-1 * var(--raum-s)) 0 0;
    text-align: center;
    font-size: var(--text-s);
    color: var(--tinte-2);
  }
</style>
