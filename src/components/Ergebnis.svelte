<script lang="ts">
  import type { Ausschluss } from "../lib/ablauf";
  import { hatSchwerpunkt, interessenProfil, rangfolge, rangliste, type Antworten, type Vorschlag } from "../lib/auswertung";
  import { BEISPIEL_NAME } from "../lib/beispiel";
  import { BEREICHE, BEREICHSFOLGE } from "../lib/interessen";
  import BerufKarte from "./BerufKarte.svelte";

  interface Props {
    antworten: Antworten;
    ausschluesse: Ausschluss[];
    beispiel: boolean;
    onaendern: () => void;
    onneu: () => void;
  }
  let { antworten, ausschluesse, beispiel, onaendern, onneu }: Props = $props();

  const ANZAHL = 8;

  const profil = $derived(interessenProfil(antworten));
  const reihe = $derived(rangfolge(profil));
  const klar = $derived(hatSchwerpunkt(profil));
  const erster = $derived(BEREICHE[reihe[0]]);
  const zweiter = $derived(BEREICHE[reihe[1]]);
  // Alle Bereiche, die mit dem Zweitplatzierten gleichauf liegen. Sind es
  // mehrere, wäre es Willkür, einen davon herauszugreifen.
  const gleichauf = $derived(reihe.slice(1).filter((b) => profil[b] === profil[reihe[1]]));
  // Der zweite Bereich wird nur genannt, wenn er eher gern gewählt wurde
  // (über der Mitte der Skala) und allein Zweiter ist.
  const mitZweitem = $derived(profil[reihe[1]] > 0.5 && gleichauf.length === 1);
  const dahinter = $derived(
    profil[reihe[1]] > 0.5 && gleichauf.length > 1 ? liste(gleichauf.map((b) => BEREICHE[b].name)) : "",
  );

  const ergebnis = $derived(rangliste(antworten, ausschluesse));

  let sortierung = $state<"passung" | "weg">("passung");
  const gezeigt = $derived.by((): Vorschlag[] => {
    const beste = ergebnis.vorschlaege.slice(0, ANZAHL);
    return sortierung === "passung" ? beste : [...beste].sort((a, b) => b.mitgebracht - a.mitgebracht || b.passung - a.passung);
  });

  function liste(namen: string[]): string {
    return namen.length < 2 ? namen.join("") : `${namen.slice(0, -1).join(", ")} und ${namen.at(-1)}`;
  }
</script>

<main class="seite ergebnis">
  {#if beispiel}
    <p class="hinweis beispiel" role="note">
      <strong>Beispielperson:</strong> {BEISPIEL_NAME}. Die Antworten sind vorausgefüllt. <button type="button" class="textknopf" onclick={onneu}>Eigenen Test machen</button>
    </p>
  {/if}

  <p class="kicker">{beispiel ? "Beispiel – so sähe Ihr Ergebnis aus" : "Ihr Ergebnis"}</p>
  <h1>Diese Berufe passen zu Ihnen</h1>
  <p class="vorspann">
    Sortiert nach Passung zu Interessen und Werten. Dazu steht jeweils, wie weit der Weg ist – gemessen daran,
    wie viele Kerntätigkeiten des Berufs Sie schon kennen.
  </p>

  <div class="sortierung" role="group" aria-label="Sortierung">
    <button type="button" aria-pressed={sortierung === "passung"} onclick={() => (sortierung = "passung")}>Beste Passung</button>
    <button type="button" aria-pressed={sortierung === "weg"} onclick={() => (sortierung = "weg")}>Kürzester Weg</button>
  </div>

  <ol class="berufe">
    {#each gezeigt as v, i (v.beruf.id)}
      <li><BerufKarte vorschlag={v} rang={i + 1} /></li>
    {/each}
  </ol>
  <p class="umfang">
    Die {gezeigt.length} besten von {ergebnis.vorschlaege.length + ergebnis.aussortiert} Berufen.
    {#if ergebnis.aussortiert}{ergebnis.aussortiert} {ergebnis.aussortiert === 1 ? "ist" : "sind"} an den ausgeschlossenen Bedingungen aussortiert.{/if}
  </p>

  <p class="hinweis" role="note">
    <strong>Vorschau.</strong> Fragen und Berufsdaten sind Beispiele. So funktioniert der Abgleich – die Liste selbst
    sagt noch nichts aus.
  </p>

  <section class="abschnitt" aria-labelledby="profil-titel">
    <h2 id="profil-titel">Das Interessenprofil</h2>
    {#if klar}
      <p class="deutung">
        {#if mitZweitem}
          Am meisten reizt Sie: <strong>{erster.name}</strong> ({erster.satz}) und
          <strong>{zweiter.name}</strong> ({zweiter.satz}).
        {:else}
          Am meisten reizt Sie: <strong>{erster.name}</strong> ({erster.satz}).{#if dahinter}{" "}Dahinter
            liegen gleichauf: {dahinter}.{/if}
        {/if}
      </p>
    {:else}
      <p class="deutung">
        Noch kein klarer Schwerpunkt: Die Antworten liegen in allen sechs Bereichen nah beieinander. Die Berufsliste
        stützt sich dann stärker auf Werte und Erfahrung.
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
  </section>

  <section class="abschnitt" aria-labelledby="sicher-titel">
    <h2 id="sicher-titel">Wie sicher ist das?</h2>
    <p>
      Die Liste sind Vorschläge auf Grundlage der Antworten, keine Eignungsaussage. Ob Interessen zum Beruf passen,
      sagt die spätere Zufriedenheit nur zum Teil voraus. Die Berufsdaten stammen aus einer amerikanischen Datenbank
      und sind auf deutsche Berufe übertragen.
    </p>
    <p>
      Was die App nicht kann: Ihre Fähigkeiten messen. Dafür gibt es die kostenlosen Tests von <strong>New Plan</strong>
      der Bundesagentur für Arbeit. Und wer mit einem Menschen sprechen möchte: Die <strong>Berufsberatung im
      Erwerbsleben</strong> der Arbeitsagentur ist ebenfalls kostenlos.
    </p>
  </section>

  <section class="abschnitt gespraech" aria-labelledby="gespraech-titel">
    <h2 id="gespraech-titel">Im Gespräch vertiefen</h2>
    <p class="folgt">Kommt im nächsten Schritt</p>
    <p>
      Ein Gespräch mit einer KI, das nachfragt und die Liste erklärt: Warum dieser Beruf? Was spricht dagegen? Was
      müsste ich lernen? Sie schalten es selbst zu. Es bekommt nur Ihre zusammengefassten Werte, keine einzelnen
      Antworten, und läuft auf Servern in der EU.
    </p>
  </section>

  <div class="knoepfe">
    {#if !beispiel}
      <button type="button" class="knopf neben" onclick={onaendern}>Antworten ändern</button>
    {/if}
    <button type="button" class="knopf neben" onclick={onneu}>{beispiel ? "Eigenen Test machen" : "Von vorn beginnen"}</button>
  </div>
</main>

<style>
  .beispiel { margin-bottom: var(--raum-l); }
  .beispiel .textknopf { min-height: 0; }

  h1 { margin: 0 0 var(--raum-s); font-size: var(--text-xl); }
  .vorspann { margin: 0 0 var(--raum-m); color: var(--tinte-2); }

  .sortierung {
    display: inline-flex;
    align-self: flex-start;
    margin-bottom: var(--raum-m);
    padding: 3px;
    border: 1px solid var(--rahmen);
    border-radius: 999px;
    background: var(--flaeche);
  }
  .sortierung button {
    min-height: 2.5rem;
    padding: 0 var(--raum-m);
    border: 0;
    border-radius: 999px;
    background: transparent;
    font-size: var(--text-s);
  }
  .sortierung button[aria-pressed="true"] {
    background: var(--akzent-flaeche);
    color: var(--auf-akzent);
    font-weight: 600;
  }

  .berufe {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: var(--raum-s);
  }
  .umfang { margin: var(--raum-s) 0 var(--raum-l); font-size: var(--text-s); color: var(--tinte-2); }

  .abschnitt { margin-top: var(--raum-xl); }
  .abschnitt h2 { margin: 0 0 var(--raum-s); font-size: var(--text-l); }
  .abschnitt p { margin: 0 0 var(--raum-s); }
  .deutung { margin-bottom: var(--raum-m) !important; }

  .balken {
    list-style: none;
    margin: 0;
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

  .gespraech {
    padding: var(--raum-m);
    border: 1px dashed var(--rahmen);
    border-radius: var(--radius);
  }
  .folgt {
    font-size: var(--text-s);
    color: var(--tinte-2);
    margin-top: calc(-1 * var(--raum-xs)) !important;
  }

  .knoepfe {
    margin-top: var(--raum-xl);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
    gap: var(--raum-s);
  }
</style>
