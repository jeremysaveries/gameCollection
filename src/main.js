import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte"; // On monte l'application entière

const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;
