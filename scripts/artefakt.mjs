// Macht aus dem Bau (dist/) EINE Datei für die Browseransicht auf
// claude.ai – damit Max den Stand auch unterwegs auf dem Handy sieht.
//
//   npm run build && npm run artefakt -- <Zieldatei.html>
//
// Die Plattform legt das Dokumentgerüst (doctype, html, head, body)
// selbst an. Deshalb: Stile und Skript einbetten, Gerüst entfernen,
// <title> an den Anfang.

import { readFileSync, writeFileSync } from "node:fs";

const ziel = process.argv[2];
if (!ziel) {
  console.error("Aufruf: npm run artefakt -- <Zieldatei.html>");
  process.exit(1);
}

let html = readFileSync("dist/index.html", "utf8");

html = html.replace(
  /<link rel="stylesheet"[^>]*href="\.\/(assets\/[^"]+\.css)"[^>]*>/g,
  (_, pfad) => `<style>\n${readFileSync(`dist/${pfad}`, "utf8").replaceAll("</style", "<\\/style")}\n</style>`,
);
html = html.replace(
  /<script type="module"[^>]*src="\.\/(assets\/[^"]+\.js)"[^>]*><\/script>/g,
  (_, pfad) => `<script type="module">\n${readFileSync(`dist/${pfad}`, "utf8").replaceAll("</script", "<\\/script")}\n</script>`,
);

const titel = html.match(/<title>.*?<\/title>/)?.[0] ?? "<title>Traumjobfinder</title>";
html = html
  .replace(/<title>.*?<\/title>\n?/, "")
  .replace(/<!doctype html>\n?/i, "")
  .replace(/<\/?html[^>]*>\n?/g, "")
  .replace(/<\/?head>\n?/g, "")
  .replace(/<\/?body>\n?/g, "")
  .replace(/<meta (charset|name="viewport")[^>]*>\n?/g, "");

if (/\.\/assets\//.test(html)) {
  console.error("Abbruch: Es verweist noch etwas auf dist/assets/ – das käme in der Browseransicht nicht an.");
  process.exit(1);
}

writeFileSync(ziel, `${titel}\n${html}`);
console.log(`Browserfassung geschrieben: ${ziel} (${Math.round(Buffer.byteLength(html) / 1024)} KB)`);
