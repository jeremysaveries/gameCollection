<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css'; // Import du style par défaut de Splide

  let options = {
    perPage: 2,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    arrows: true,
    drag: 'free',
  };
</script>

<style>
  /* Ajout du style "Bluesky" manuellement */
  :global(.splide__arrow) {
    background-color: #1e90ff !important; /* Bleu ciel */
    border-radius: 50%;
  }

  :global(.splide__pagination__page) {
    background-color: #1e90ff !important;
  }

  :global(.splide__track) {
    border-radius: 10px;

  }
</style>

<Splide {options} aria-label="Jackette de jeu">
  <SplideSlide>
    <img
      src="../public/img/jackette/game-month/starWars.jpeg"
      alt="Image 1"
      class="w-[150px] h-[225px] object-cover rounded-lg m-4 shadow-lg"
    />
  </SplideSlide>
  <SplideSlide>
    <img
      src="../public/img/jackette/game-month/starWars.jpeg"
      alt="Image 2"
      class="w-[150px] h-[225px] object-cover rounded-lg m-4 shadow-lg"
    />
  </SplideSlide>
  <SplideSlide>
    <img
      src="../public/img/jackette/game-month/starWars.jpeg"
      alt="Image 3"
      class="w-[150px] h-[225px] object-cover rounded-lg m-4 shadow-lg"
    />
  </SplideSlide>
</Splide>
