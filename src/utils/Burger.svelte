
<svelte:head>
<link href="https://cdn.jsdelivr.net/npm/daisyui@2.11.0/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>


<script>
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './Menu.svelte'; // On importe le composant Menu
  
	let open = false; // État qui gère l'ouverture/fermeture du menu
  </script>
  
  <style>
	/* Le bouton hamburger */
	.hamburger-container {
	  position: absolute;
	  top: 20px; /* Ajuste la position du bouton hamburger si nécessaire */
	  right: 20px; /* Le bouton est à droite */
	  z-index: 10; /* Le bouton hamburger reste au-dessus du menu */
	}
  
	/* Le menu qui se glisse depuis le haut */
	.menu {
	  position: fixed;
	  top: 0;
	  left: 0;
	  background-color: white;
	  width: 100%; /* Le menu occupe toute la largeur */
	  height: 250px; /* Hauteur du menu */
	  padding-top: 1rem;
	  transform: translateY(-100%); /* Menu caché par défaut */
	  transition: transform 0.3s ease-in-out; /* Animation du glissement */
	  z-index: 5; /* Le menu est derrière le bouton hamburger */
	}
  
	/* Lorsque le menu est ouvert */
	.menu.open {
	  transform: translateY(0); /* Menu glissé vers le bas lorsqu'il est ouvert */
	}
  
	/* Liens du menu */
	a {
	  font-size: 1.25rem;
	  color: #00B0FC;
	  text-decoration: none;
	  font-family: roboto;
	  font-weight: bolder;
	  padding: 1rem;
	  display: block;
	
	}
  
	a:hover {
	  color: #007f96;
	}
  
	/* Media queries pour mobile */
	@media (max-width: 500px) {
	  .menu {
		height: 200px; /* Réduire la hauteur du menu sur mobile */
	  }
  
	  a {
		font-size: 1.1rem; /* Ajuste la taille du texte sur mobile */
	  }
	}
  </style>
  
  <div>
	<!-- Le bouton hamburger -->
	<div class="hamburger-container">
		<Hamburger bind:open --color="white" />
	</div>
  
	<!-- Le menu, affiché en fonction de l'état "open" -->
	<Menu bind:open />
  </div>