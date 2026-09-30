<script lang="ts">
  import { BEREICHE, BEREICHSFOLGE } from "../lib/fragen";
  import { hatSchwerpunkt, rangfolge, type Profil } from "../lib/auswertung";

  interface Props {
    profil: Profil;
    onaendern: () => void;
    onneu: () => void;
  }
  let { profil, onaendern, onneu }: Props = $props();

  const reihe = $derived(rangfolge(profil));
  const klar = $derived(hatSchwerpunkt(profil));
  const erster = $derived(BEREICHE[reihe[0]]);
  const zweiter = $derived(BEREICHE[reihe[1]]);
  // Alle Bereiche, die mit dem Zweitplatzierten gleichauf liegen. Sind es
  // mehrere, wäre es Willkür, einen davon herauszugreifen.
  const gleichauf = $derived(reihe.slice(1).filter((b) => profil[b] === profil[reihe[1]]));
  // Der zweite Bereich wird nur genannt, wenn er eher gern gewählt wurde
  // (über der Mitte der Skala) – sonst hieße „am meisten reizt Sie" auch
  // etwas, das die Person gar nicht mag – und wenn er allein Zweiter ist.
  const mitZweitem = $derived(profil[reihe[1]] > 0.5 && gleichauf.length === 1);
  const dahinter = $derived(
    profil[reihe[1]] > 0.5 && gleichauf.length > 1 ? liste(gleichauf.map((b) => BEREICHE[b].name)) : "",
  );

  function liste(namen: string[]): string {
    return namen.length < 2 ? namen.join("") : `${namen.slice(0, -1).join(", ")} und ${namen.at(-1)}`;
  }
</script>

<main class="seite ergebnis">
  <p class="kicker">Ihr Interessenprofil</p>

  {#if klar}
    {#if mitZweitem}
      <h1>Am meisten reizt Sie: {erster.name} und {zweiter.name}</h1>
      <p class="deutung">
        {erster.name} heißt: {erster.satz}. {zweiter.name}: {zweiter.satz}.
      </p>
    {:else}
      <h1>Am meisten reizt Sie: {erster.name}</h1>
      <p class="deutung">
        {erster.name} heißt: {erster.satz}.{#if dahinter}{" "}Dahinter liegen gleichauf: {dahinter}.{/if}
      </p>
    {/if}
  {:else}
    <h1>Noch kein klarer Schwerpunkt</h1>
    <p class="deutung">
      Ihre Antworten liegen in allen sechs Bereichen nah beieinander. Das ist kein Fehler –
      mehr Fragen oder die Teile zu Werten und Erfahrung schärfen das Bild.
    </p>
  {/if}

  <ul class="balken">
    {#each BEREICHSFOLGE as b (b)}
      <li>
        <span class="name">{BEREICHE[b].name}</span>
        <span class="spur" role="img" aria-label="{BEREICHE[b].name}: {Math.round(profil[b] * 100)} von 100">
          <span class="wert" style:width="{profil[b] * 100}%"></span>
        </span>
      </li>
    {/each}
  </ul>

  <p class="hinweis" role="note">
    <strong>Entwurf.</strong> Das Profil beruht auf Beispielfragen und sagt noch nichts aus.
  </p>

  <section class="weiter" aria-labelledby="weiter-titel">
    <h2 id="weiter-titel">Wie es weitergeht</h2>
    <p>
      In der fertigen App folgen Fragen zu Ihren Werten und Ihrer Berufserfahrung. Danach sehen
      Sie Berufe, die zu Ihnen passen – und wie weit der Weg dorthin ist.
    </p>
  </section>

  <div class="knoepfe">
    <button type="button" class="knopf neben" onclick={onaendern}>Antworten ändern</button>
    <button type="button" class="knopf neben" onclick={onneu}>Von vorn beginnen</button>
  </div>
</main>

<style>
  h1 {
    margin: 0 0 var(--raum-m);
    font-size: var(--text-xl);
  }
  .deutung { margin: 0 0 var(--raum-l); }

  .balken {
    list-style: none;
    margin: 0 0 var(--raum-l);
    padding: 0;
    display: grid;
    gap: var(--raum-s);
  }
  .balken li {
    display: grid;
    grid-template-columns: 8.5rem 1fr;
    align-items: center;
    gap: var(--raum-s);
    font-size: var(--text-s);
  }
  .spur {
    height: 0.75rem;
    background: var(--spur);
    border-radius: 999px;
    overflow: hidden;
  }
  .wert {
    display: block;
    height: 100%;
    background: var(--akzent-flaeche);
    border-radius: 999px;
  }

  .weiter { margin-top: var(--raum-l); }
  .weiter h2 { margin: 0 0 var(--raum-s); font-size: var(--text-l); }
  .weiter p { margin: 0; }

  .knoepfe {
    margin-top: auto;
    padding-top: var(--raum-l);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
    gap: var(--raum-s);
  }
</style>
