import "./styles/tokens.css";
import "./styles/basis.css";
import { mount } from "svelte";
import App from "./App.svelte";

const ziel = document.getElementById("app");
if (!ziel) throw new Error("Element #app fehlt in index.html");

export default mount(App, { target: ziel });
