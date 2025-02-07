<script>
    import { Card } from 'flowbite-svelte';
  
    // Tableau d'exemples de cartes, avec les informations nécessaires
    let products = [
      { image: "../public/img/genre/fps.jpg", title: 'FPS', link: '/product-1' },
      { image: "../public/img/genre/gestion.jpeg", title: 'Gestion',  link: '/product-2' },
      { image: "../public/img/genre/horror.jpg", title: 'Horreur',  link: '/product-3' },
      { image: "../public/img/genre/inde.jpeg", title: 'Indépendant',  link: '/product-4' },
      { image: "../public/img/genre/mmo.jpg", title: 'MMORPG', link: '/product-5' },
      { image: "../public/img/genre/moba.jpeg", title: 'MOBA',  link: '/product-6' },
      { image: "../public/img/genre/plateforme.jpg", title: 'Plateforme',  link: '/product-7' },
      { image: "../public/img/genre/rpg.jpg", title: 'RPG',  link: '/product-8' },
      { image: "../public/img/genre/simulation.jpg", title: 'Simulation',link: '/product-9' },
      { image: "../public/img/genre/sport.jpg", title: 'Sport', link: '/product-10' },
      { image:"../public/img/genre/str.jpg", title: 'Stratégie', link: '/product-11' }
    ];
    products = Array.from(new Set(products.map(p => JSON.stringify(p)))).map(str => JSON.parse(str));
  </script>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each products as product}
      <Card padding="none">
        <a href={product.link}>
          <div class="relative">
            <img class="rounded-t-lg w-full w-full " src={product.image} alt={product.title} />
            <div class="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
              <p class="text-white text-xl font-bolder">{product.title}</p>
            </div>
          </div>
        </a>
        <div class="px-5 ">
          <a href={product.link}>
          </a>
        </div>
      </Card>
    {/each}
  </div>
  
  <style>
    /* Style supplémentaire pour ajuster la taille des cartes et les espacer */
    .grid {
      gap: 0,5rem;
    }
  
    .relative {
      position: relative;
    }
  
    .absolute {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    /* Ajustement pour les écrans mobiles (max-width: 500px) */
    @media (max-width: 500px) {
      .grid {
        grid-template-columns: repeat(2, 1fr); /* Affichage en 2 colonnes */
      }
  
      .text-xl {
        font-weight: bold; 
        font-family: roboto;/* Réduire la taille du texte pour les petits écrans */
      }
  
      .p-8 {
        padding: 4px; /* Réduire le padding de l'image */
      }
  
      .h-48 {
        height: 200px; /* Réduire la hauteur de l'image */
      }
    }
  </style>
  