<script>
    export let image = "/default-banner.jpg"; // Image par défaut
    export let altText = "Bannière";
  </script>
  
  <style>
    .banner {
      position: fixed;
      top: 0;           /* Place la bannière en haut de la page */
      left: 0;          /* L'aligne à gauche */
      width: 100%;      /* S'étend sur toute la largeur de l'écran */
      z-index: 10;      /* Assure-toi qu'elle est au-dessus des autres éléments */
      width: 100%;
      height: 300px; /* Ajustable */
      background-size: cover;
      background-position: center;
      
    }
  
  </style>
  
  <div 
    class="banner" 
    style="background-image: url({image});" 
    aria-label={altText}
  ></div>

  