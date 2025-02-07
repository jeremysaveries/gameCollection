<script>
    export let open; // L'état qui est lié au bouton hamburger
  </script>
  
  <style>
    .menu {
      position: fixed;
      top: 0;
      left: 0;
      background-color: #272727;
      width: 100%;
      height: 250px; /* Hauteur du menu */
      padding-top: 1rem;
      filter: none;
    
      transform: translateY(-100%); /* Menu caché par défaut */
      transition: transform 0.3s ease-in-out; /* Animation du glissement */
      z-index: 5; /* Assure-toi que le menu est derrière le bouton */
    }
  
    /* Quand le menu est ouvert */
    .menu.open {
      transform: translateY(0); /* Le menu s'affiche depuis le haut */
    }
  
    a {
      font-size: 1.25rem;
      color: #004f5c;
      text-decoration: none;
      padding: 1rem;
      display: block;
      transition: color 0.3s ease;
    }
  
    a:hover {
      color: #007f96;
    }
  </style>
  
  <div class="menu {open ? 'open' : ''}">
    <a href="/connexion">Connexion</a>
    <a href="/inscription">Inscription</a>
    <a href="/jeux">Jeux</a>
  </div>
  