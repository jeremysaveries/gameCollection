<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@2.11.0/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<script>
  import { Hamburger } from 'svelte-hamburgers';
  import Menu from './Menu.svelte'; // Assurez-vous que Menu est bien importé

  let open = false; // État qui gère l'ouverture/fermeture du menu
</script>

<style>
  /* Le bouton hamburger */
  .hamburger-container {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;
    opacity: 1 !important;
  }

  /* Le menu qui se glisse depuis le haut */
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 250px;
    padding-top: 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 5;
    mix-blend-mode: normal !important;
  }

  /* Menu ouvert */
  .menu.open {
    transform: translateY(0);
  }

  a {
    font-size: 1.25rem;
    color: #00B0FC;
    text-decoration: none;
    font-family: roboto;
    font-weight: bolder;
    padding: 1rem;
    display: block;
    opacity: 1 !important;
  }

  a:hover {
    color: #007f96;
  }

  /* Media queries pour mobile */
  @media (max-width: 500px) {
    .menu {
      height: 200px;
    }

    a {
      font-size: 1.1rem;
    }
  }
</style>

<div>
  <!-- Le bouton hamburger -->
  <div class="hamburger-container">
    <Hamburger bind:open={open} --color="white" />
  </div>

  <!-- Le menu, affiché en fonction de l'état "open" -->
  <Menu {open} />
</div>
