import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// Port 4400: webdesign belegt 4321–4326, beide Vorschauen können
// gleichzeitig laufen (CLAUDE.md).
// base "./": relative Pfade, damit der Bau in jedem Unterordner und als
// Browserseite auf claude.ai läuft.
export default defineConfig({
  base: "./",
  plugins: [svelte()],
  server: { port: 4400, strictPort: true },
  preview: { port: 4400, strictPort: true },
});
