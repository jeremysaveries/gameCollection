<script>
    import Burger from "../utils/Burger.svelte";
    import Carrousel from "../utils/carrousel.svelte";
    import Card from "../utils/CardHome.svelte";


    let images = [
    "https://via.placeholder.com/600x300?text=Image+1",
    "https://via.placeholder.com/600x300?text=Image+2",
    "https://via.placeholder.com/600x300?text=Image+3"
  ];

  let products = [
    { image: "../public/img/genre/fps.jpg", title: 'FPS',  link: '/product-1' },
      { image: "../public/img/genre/gestion.jpeg", title: 'Gestion', link: '/product-2' },
      { image: "../public/img/genre/horror.jpg", title: 'Horreur', link: '/product-3' },
      { image: "../public/img/genre/inde.jpeg", title: 'Indépendant',  link: '/product-4' },
      { image: "../public/img/genre/mmo.jpg", title: 'MMORPG',  link: '/product-5' },
      { image: "../public/img/genre/moba.jpeg", title: 'MOBA', link: '/product-6' },
      { image: "../public/img/genre/plateforme.jpg", title: 'Plateforme', link: '/product-7' },
      { image: "../public/img/genre/rpg.jpg", title: 'RPG',  link: '/product-8' },
      { image: "../public/img/genre/simulation.jpg", title: 'Simulation',link: '/product-9' },
      { image: "../public/img/genre/sport.jpg", title: 'Sport',  link: '/product-10' },
      { image:"../public/img/genre/str.jpg", title: 'Stratégie',  link: '/product-11' }
  ];

  

</script>

  



<main class="mainContainer">              
    <div class="logoContainer">
       
        <img src="../public/img/logo.png" alt="logo du site">
        <Burger />
    </div>
    <div class="presentationContainer">
        <h1 class="presentationTitle">Rejoignez une communauté de fans de jeux vidéos</h1>
        
            <ul class="presentationList">
                <li>
                    <h2 class="descriptionTitle">Gardez une Trace de Vos Exploits :</h2>
                    <span class="descriptionInfo"> Suivez et marquez vos jeux comme terminés, en cours, à explorer ou en attente. </span>
                </li>
                <li>
                    <h2 class="descriptionTitle">Personnalisation Avancée :</h2>
                    <span class="descriptionInfo">Personnalisez votre profil et vos listes de jeux avec notes, critiques et recommandations. </span>
                </li>
                <li>
                    <h2 class="descriptionTitle">Communauté Active et Entraide :</h2>
                    <span class="descriptionInfo"> Rejoignez une communauté vibrante, partagez des conseils et discutez des dernières sorties. </span>
                </li>
                <li>
                    <h2 class="descriptionTitle">Notifications Personnalisées :</h2>
                    <span class="descriptionInfo"> Restez à jour sur les nouvelles sorties et mises à jour importantes de vos jeux préférés.</span>
                </li>
            </ul>
             <div class="boutonContainer">

                 <a href="nouvelle-page.html" class="bouton">s'inscrire</a>
                </div>


         
        </div>

        <div class="carouselContainer">
            <h1 class="titleCarousel">Prochainement</h1>
            <p class="descriptionCarousel">jeux attendu cette année </p>
            <Carrousel {images} />

        </div>

        <div class="carouselContainer">
            <h1 class="titleCarousel">jeux populaires</h1>
            <p class="descriptionCarousel">jeux les plus appreciés </p>
            <Carrousel {images} />
        </div>
        <h1 class="cardTitle" > parcourir par genre</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
            
            <Card {products}/>
        </div>
        
    

</main>

<style>
    @media (max-width: 500px) {
        body {
            background-color: #272727 !important;
            margin: 0;
            padding: 0;
            width: 100vw;
            overflow-x: hidden;
        }
        .logoContainer{
            display: flex;
            flex-direction: row;
            align-items: center; /* Centre tout horizontalement */
            justify-content: space-between; /* Centre verticalement */
            background-color: #272727;
         
        }
           

        .logoContainer img {
            width: 119px;
            height: auto;
            margin-left: 1em;
            margin-top: 1em;
        }
        .presentationContainer{
            background-image: radial-gradient(circle farthest-corner at 10% 10%, #0c2d59, #6f5884, #bc9ac3);
            display: flex;
          flex-direction: column;
          gap: 1em;
          padding-bottom: 1em;
          
        }


        .presentationTitle{
            display: flex;
            flex-direction: column;
            color: white;
            font-family: roboto;
            font-weight: bolder;
            font-size: 1em;
            margin-left: 1em;

        }

        .presentationList{
            display: flex;
            flex-direction: column;
            gap: 1em;
            margin-left: 1em
        }
        .descriptionTitle{
            color: white;
            font-family: roboto;
            font-weight: bold;
        }
        .descriptionInfo{
            font-family: inter;
            font-weight: bold;
           
        }
        .bouton {
    display: inline-block; /* Évite que le bouton prenne toute la largeur */
    padding: 10px 20px; /* Espace autour du texte */
    text-decoration: none; /* Supprime le soulignement */
    color: white; /* Couleur du texte */
    border-radius: 5px; /* Coins arrondis */
    width:100px; /* Laisse la largeur s’adapter au contenu */
    text-align: center; /* Centre le texte si besoin */
    background-color: #1e90ff;
  }

  .bouton:hover {
    background-color: #007f96; /* Effet au survol */
  }

    .boutonContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
      .titleCarousel{
        font-family: roboto;
        font-weight: bold;
        text-align: center;
        padding-top: 1em;

      }

      .descriptionCarousel{
        font-family: inter;
        text-align: center;
      }
   
   
      .cardTitle{
        font-family: roboto;
        font-weight: bold;
        text-align: center;
        padding-top: 2em;
      }

    }
</style>