<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';


</script>


<Splide aria-label="Mes images préférées">
  <SplideSlide>
    <img
      src="../public/img/jackette/game-month/starWars.jpeg"
      alt="Image 1"
      class="w-[150px] h-[225px] border-black-500 object-cover rounded-lg m-4"
       style="box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.5);"
    />
  </SplideSlide>
  <SplideSlide>
    <img
      src="../public/img/jackette/game-month/starWars.jpeg"
      alt="Image 2"
     class="w-[150px] h-[225px] border-black-500 object-cover rounded-lg m-4"
       style="box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.5);"
    />
  </SplideSlide>
</Splide>





