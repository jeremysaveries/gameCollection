import { mount } from "svelte";
import "./app.css";
import Accueil from "../src/pages/home.svelte"; // Remplacer App par Accueil

const app = mount(Accueil, {
  // Monter le composant Accueil
  target: document.getElementById("app"),
});

export default app;
