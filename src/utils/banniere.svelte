<script>
  export let imageUrl; // URL de l'image
  export let altText = "Bannière"; // Texte alternatif par défaut

</script>

<style>
  .banner {
    width: 100%;
    height: 300px; /* Hauteur ajustable */
    position: relative; /* Nécessaire pour ajouter d'autres éléments si besoin */
  }

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* L'image s'adapte à la taille du conteneur */
  }
</style>

<div class="banner">
  <img src={imageUrl} alt={altText} class="bannerImage" />
</div>

  