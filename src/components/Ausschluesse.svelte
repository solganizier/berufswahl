<script lang="ts">
  // Stufe 1 der Auswertung: Aussieben (E5). Nur was die Person hier
  // ankreuzt, schließt Berufe aus – alles andere wird abgewogen.
  import { AUSSCHLUESSE, type Ausschluss } from "../lib/ablauf";

  interface Props {
    gewaehlt: Ausschluss[];
    onfertig: (auswahl: Ausschluss[]) => void;
    onzurueck: () => void;
    onpause: () => void;
  }
  let { gewaehlt, onfertig, onzurueck, onpause }: Props = $props();

  // Startwert aus dem gespeicherten Stand, danach lokal – übernommen erst mit „Zum Ergebnis"
  // svelte-ignore state_referenced_locally
  let auswahl = $state<Ausschluss[]>([...gewaehlt]);

  let ueberschrift = $state<HTMLElement>();
  $effect(() => {
    ueberschrift?.focus();
  });
</script>

<main class="seite ausschluesse">
  <div class="kopfzeile">
    <p class="zaehler">Fast geschafft</p>
    <button type="button" class="textknopf" onclick={onpause}>Pause</button>
  </div>

  <form
    class="formular"
    onsubmit={(e) => {
      e.preventDefault();
      onfertig(auswahl);
    }}
  >
    <fieldset>
      <legend>
        <h1 tabindex="-1" bind:this={ueberschrift}>Kommt etwas davon für Sie nicht infrage?</h1>
      </legend>
      <p class="erklaerung">Nur ankreuzen, was wirklich nicht geht. Alles andere wägt die App ab, statt auszusortieren.</p>

      <div class="optionen">
        {#each AUSSCHLUESSE as a (a.id)}
          <label class="option">
            <input type="checkbox" id="ausschluss-{a.id}" value={a.id} bind:group={auswahl} />
            <span>{a.text}</span>
          </label>
        {/each}
      </div>
    </fieldset>

    <div class="knoepfe">
      <button type="submit" class="knopf haupt">Zum Ergebnis</button>
      <button type="button" class="textknopf" onclick={onzurueck}>Zurück</button>
    </div>
  </form>
</main>

<style>
  .kopfzeile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .zaehler { margin: 0; font-size: var(--text-s); color: var(--tinte-2); }

  .formular { flex: 1; display: flex; flex-direction: column; }
  fieldset { border: 0; margin: 0; padding: 0; min-width: 0; }
  legend { padding: 0; }
  h1 { margin: var(--raum-xl) 0 var(--raum-s); font-size: var(--text-xl); }
  .erklaerung { margin: 0 0 var(--raum-l); color: var(--tinte-2); }

  .optionen { display: grid; gap: var(--raum-s); }
  .option {
    display: flex;
    gap: var(--raum-m);
    align-items: flex-start;
    padding: var(--raum-m);
    border: 1px solid var(--rahmen);
    border-radius: var(--radius);
    background: var(--flaeche);
    cursor: pointer;
  }
  .option:has(input:checked) {
    background: var(--akzent-hell);
    border: 2px solid var(--akzent);
    padding: calc(var(--raum-m) - 1px);
  }
  .option input {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.15rem 0 0;
    flex: none;
    accent-color: var(--akzent-flaeche);
  }

  .knoepfe {
    margin-top: auto;
    padding-top: var(--raum-l);
    display: grid;
    gap: var(--raum-s);
  }
  .knoepfe .textknopf { justify-self: start; }
</style>
