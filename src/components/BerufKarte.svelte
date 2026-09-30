<script lang="ts">
  // Ein Beruf in der Ergebnisliste: Passung und Weg auf einen Blick,
  // die Begründung aufklappbar. Beides steht in Worten UND als Form da,
  // nie nur als Farbe.
  import { passungsStufe, type Vorschlag } from "../lib/auswertung";
  import { TAETIGKEITEN } from "../lib/erfahrung";
  import { BEREICHE } from "../lib/interessen";
  import { WERTE } from "../lib/werte";

  interface Props {
    vorschlag: Vorschlag;
    rang: number;
  }
  let { vorschlag, rang }: Props = $props();

  const v = $derived(vorschlag);
  const stufe = $derived(passungsStufe(v.passung));
  const n = $derived(v.beruf.taetigkeiten.length);
  const punkte = { nah: 3, mittel: 2, weit: 1 } as const;
  const passungPunkte = { hoch: 3, mittel: 2, gering: 1 } as const;

  // Gelegentliches zählt halb – deshalb sagt der Satz, wie viel davon
  // regelmäßig ist. Sonst stünde „3 von 4 bekannt" neben „mittlerer Weg".
  const wegSatz = $derived.by(() => {
    const anfang = { nah: "Nah dran", mittel: "Mittlerer Weg", weit: "Weiter Weg" }[v.weg];
    const k = v.bekannt.length;
    const r = v.regelmaessig.length;
    if (k === 0) return `${anfang} – keine der ${n} Kerntätigkeiten kennen Sie schon`;
    const davon = r === k ? (k === 1 ? "regelmäßig" : "alle regelmäßig") : r === 0 ? "nur gelegentlich" : `${r} davon regelmäßig`;
    return `${anfang} – ${k} von ${n} Kerntätigkeiten kennen Sie, ${davon}`;
  });

  function liste(namen: string[]): string {
    return namen.length < 2 ? namen.join("") : `${namen.slice(0, -1).join(", ")} und ${namen.at(-1)}`;
  }
</script>

<article class="karte">
  <h3><span class="rang">{rang}.</span> {v.beruf.name}</h3>
  <p class="zugang">{v.beruf.zugang}</p>

  <dl class="werte">
    <div>
      <dt>Passung</dt>
      <dd>
        <span class="punkte" aria-hidden="true">
          {#each [1, 2, 3] as i (i)}<span class:voll={i <= passungPunkte[stufe]}></span>{/each}
        </span>
        {stufe}
      </dd>
    </div>
    <div>
      <dt>Weg</dt>
      <dd>
        <span class="punkte" aria-hidden="true">
          {#each [1, 2, 3] as i (i)}<span class:voll={i <= punkte[v.weg]}></span>{/each}
        </span>
        {v.weg}
      </dd>
    </div>
  </dl>
  <p class="weg-satz">{wegSatz}</p>

  <details>
    <summary>Warum dieser Beruf?</summary>
    <ul class="gruende">
      {#if v.passendeBereiche.length}
        <li><strong>Interessen:</strong> passt zu {liste(v.passendeBereiche.map((b) => BEREICHE[b].name))}</li>
      {:else}
        <li><strong>Interessen:</strong> passt zur Form Ihres Profils, ohne dass einer Ihrer starken Bereiche dominiert</li>
      {/if}
      {#if v.passendeWerte.length}
        <li><strong>Werte:</strong> bietet, was Ihnen wichtig ist – {liste(v.passendeWerte.map((w) => WERTE[w].kurz))}</li>
      {/if}
      {#if v.bekannt.length}
        <li><strong>Das bringen Sie mit:</strong> {liste(v.bekannt.map((t) => TAETIGKEITEN[t].kurz))}</li>
      {/if}
      {#if v.neu.length}
        <li><strong>Das wäre neu:</strong> {liste(v.neu.map((t) => TAETIGKEITEN[t].kurz))}</li>
      {/if}
    </ul>
  </details>
</article>

<style>
  .karte {
    padding: var(--raum-m);
    background: var(--flaeche);
    border: 1px solid var(--linie);
    border-radius: var(--radius);
    box-shadow: 0 1px 2px var(--schatten);
  }
  h3 { margin: 0 0 0.125rem; font-size: var(--text-m); line-height: 1.3; }
  .rang { color: var(--tinte-2); font-weight: 400; font-variant-numeric: tabular-nums; }
  .zugang { margin: 0 0 var(--raum-s); font-size: var(--text-s); color: var(--tinte-2); }

  .werte {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--raum-s);
  }
  .werte div { display: grid; gap: 0.125rem; }
  dt { font-size: var(--text-s); color: var(--tinte-2); }
  dd { margin: 0; display: flex; align-items: center; gap: var(--raum-xs); font-weight: 600; }

  .punkte { display: inline-flex; gap: 3px; }
  .punkte span {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    border: 1.5px solid var(--akzent);
  }
  .punkte span.voll { background: var(--akzent-flaeche); }

  .weg-satz { margin: var(--raum-s) 0 0; font-size: var(--text-s); }

  details { margin-top: var(--raum-s); }
  summary {
    min-height: 2.75rem;
    display: flex;
    align-items: center;
    color: var(--akzent);
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
  .gruende {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: var(--raum-xs);
    font-size: var(--text-s);
  }
</style>
