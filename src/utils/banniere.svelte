<script>
    export let image = "/default-banner.jpg"; // Image par défaut
    export let altText = "Bannière";
  </script>
  
  <style>
    .banner {
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
  