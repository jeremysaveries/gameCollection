<!-- Card.svelte -->
<script>
    export let image;  // Image à afficher
  </script>
  
  <div class="card">
    <img class="cardImage" src={image}  alt="image de la carte" />
  </div>
  
  <style>

  .card {
    max-width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .cardLink {
    display: block;  /* Lien de type block pour toute la zone de l'image */
    text-decoration: none;  /* Enlever le soulignement du lien */
  }
  
    .cardImage {
      width: 102px;    /* Largeur spécifique */
      height: 135px;   /* Hauteur spécifique */
      object-fit: cover;  /* Assure que l'image couvre complètement la zone sans déformation */
      display: block;
    }
  </style>
  