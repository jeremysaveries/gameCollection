<script>
    import Banniere from "../utils/banniere.svelte";
    let image = "/default-banner.jpg";
    let altText = "Bannière";
    import ProfilPicture from "../utils/profilPicture.svelte";
    let picture = "/default-profilPicture.jpg";
    let TextProfil = "Profil";
    let Pseudo = "Pseudo";
    import AddPictureBanniere from "../utils/addPictureBanniere.svelte";
    import ProfileImageUpload from "../utils/ProfileImageUpload.svelte";
    import Sidebar from "../utils/sidebar.svelte";
    import Card from "../utils/cardGames.svelte";
    import SettingProfil from "../utils/settingProfil.svelte";
    export let link;

    let isSidebarOpen1 = false; // État pour la première sidebar
    let isSidebarOpen2 = false; // État pour la deuxième sidebar
    let isSidebarOpen3 = false;
    let isSidebarOpen4 = false;
    let lists = [];
    let listName = "";

    // Fonction pour ouvrir la première sidebar
    function openSidebar1() {
        isSidebarOpen1 = true;
    }

    // Fonction pour fermer la première sidebar
    function closeSidebar1() {
        isSidebarOpen1 = false;
    }

    // Fonction pour ouvrir la deuxième sidebar
    function openSidebar2() {
        isSidebarOpen2 = true;
    }

    // Fonction pour fermer la deuxième sidebar
    function closeSidebar2() {
        isSidebarOpen2 = false;
    }

    // Fonction pour ouvrir la deuxième sidebar
    function openSidebar3() {
        isSidebarOpen3 = true;
    }

    // Fonction pour fermer la deuxième sidebar
    function closeSidebar3() {
        isSidebarOpen3 = false;
    }

    function openSidebar4() {
        isSidebarOpen4 = true;
    }

    // Fonction pour fermer la deuxième sidebar
    function closeSidebar4() {
        isSidebarOpen4 = false;
    }


    // Fonction pour créer une liste
    function createList() {
        if (listName.trim()) {
            lists = [...lists, { name: listName, games: [] }];
            listName = ""; // Réinitialiser le champ de saisie
            closeSidebar1(); // Fermer la première sidebar après création
        }
    }

    let cardImages = [
        { src: "../img/jackette/nouveauté/assasin.jpeg", link: "/page-game1" },
        { src: "../img/jackette/nouveauté/tale.jpg", link: "/page-game2" },
        { src: "../img/jackette/nouveauté/assasin.jpeg", link: "/page-game3" }
    ];

    // Ajouter une fonction pour fermer la sidebar si l'utilisateur clique en dehors
    function handleOutsideClick(event) {
        if (
            !event.target.closest('.sidebar') &&
            !event.target.closest('.buttonAddList') &&
            !event.target.closest('.openGameSidebarre') &&
            !event.target.closest('.buttonEditProfil')&&
            !event.target.closest('.settingOpenProfil')
        ) {
            closeSidebar1();
            closeSidebar2();
            closeSidebar3();
            closeSidebar4();
        }
    }

    // Ajouter un écouteur d'événements pour gérer les clics en dehors
    import { onMount } from 'svelte';
    onMount(() => {
        window.addEventListener('click', handleOutsideClick);

        // Nettoyer l'écouteur d'événements lorsque le composant est détruit
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    });

    let bannerImages = [
        { id: 1, url: '/img/jackette/game-month/finalfantasy.jpg', name: 'finalfantasy' },
        { id: 2, url: '/img/jackette/game-month/dlcelden.jpeg', name: 'dlc eldenRing' },
        { id: 3, url: '/img/jackette/game-month/starwars.jpeg', name: 'starwars' }
    ];

    let selectedBannerImage = ''; // Image sélectionnée pour la bannière
    let showBannerDropdown = false; // Contrôle l'affichage de la liste des images de la bannière

    // Sélectionner une image pour la bannière
    function selectBannerImage(image) {
        selectedBannerImage = image.url; // Mettre à jour l'image de la bannière
        showBannerDropdown = false; // Fermer la liste des images
    }

    // Afficher ou masquer la liste déroulante pour la bannière
    function toggleBannerDropdown() {
        showBannerDropdown = !showBannerDropdown;
    }
</script>

<main class="mainContainer">
    <div class="bannerContainer">
        <Banniere 
          imageUrl={selectedBannerImage || "../img/gta.jpg"} 
          altText="banniere" 
        />
    </div>
    

    <div class="profilContainer">
        <ProfilPicture picture={picture} TextProfil={TextProfil} />
        <img class="profilPicture" src="../img/profil.jpg" alt="photo de profil" />
        <p class="ProfilPseudo">jeremy</p>
        <button class='buttonEditProfil' on:click={openSidebar3}>modifier le profil</button>
    </div>

  



    <Sidebar isOpen={isSidebarOpen3} closeSidebar={closeSidebar3}>
        <h2 class="titleSidebar3">modifier le profil </h2>
       <ProfileImageUpload/>
        <AddPictureBanniere />
    </Sidebar>


    <div class="settingProfilContainer">
        <button class='settingOpenProfil' on:click={openSidebar4}><i class="fa-solid fa-gear"></i></button>
    </div>
    <Sidebar isOpen={isSidebarOpen4} closeSidebar={closeSidebar4}>
    <SettingProfil />
    </Sidebar>

    <div class="gameCounter">
        <h1 class='titleCount'>nombre de jeux</h1>
        <p class='count'>10</p>
    </div>

    <h1 class="listTitle">Listes</h1>

    <div class="OpensidebarContainer">
        <button class="buttonAddList" on:click={openSidebar1}><p> <i class="fa-solid fa-plus"></i> Ajouter une liste </p></button>

        <Sidebar isOpen={isSidebarOpen1} closeSidebar={closeSidebar1}>
            <h2>Nom</h2>
            <input class="buttonCreateList" type="text" bind:value={listName} placeholder="Nom de la liste" />
            <button on:click={createList}>Créer</button>
        </Sidebar>
    </div>

    <div class="listGame">
        <div class="openGameSidebarre">
            <h2 class="nameList">Mes jeux</h2>
            <i class="fa-solid fa-arrow-right" on:click={openSidebar2} style="cursor: pointer;"></i>

            <Sidebar isOpen={isSidebarOpen2} closeSidebar={closeSidebar2}>
                <h2>Contenu de la sidebar</h2>
                <p>Tu peux mettre ici ce que tu veux.</p>
            </Sidebar>
        </div>
        <div class="cardContainer">
            {#each cardImages as { src, link }}
                <Card {src} {link} />
            {/each}
        </div>
    </div>
</main>

<style>
    @media (max-width: 500px) {
        img {
            width: 430px;
            height: 187px;
        }
        .profilContainer {
            display: flex;
            flex-direction: column;
            position: fixed;
            left: 105px;
            top: 140px;
            color: white;
        }

        .profilUdapteTitle {
            text-align: center;
            font-weight: bold;
            padding-bottom: 1em;
            border-bottom: solid 1px grey;
        }

        .uploadProfil {
         display: flex;
         flex-direction: column;
         padding-top: 1em;
         
         }

         .titleEditProfil {
            text-align: center;
            padding-bottom: 2em;
        }
 
         .titleSidebar3{
            text-align: center;
            padding-bottom: 1em;
          border-bottom: solid 1px grey;
         }
         .banner-upload-wrapper {
            display: flex;
            flex-direction: column;
            padding-top: 1em;
           
        }
        .banner-upload-label{
            border-top: solid 1px grey;
            display: inline-flex;
            flex-direction: row-reverse;
             justify-content: flex-end;
            gap: 1em;
            padding-top: 1em;
        }
            
        .bannerImgList {
            list-style: none;

        }




        .buttonEditProfil{
            position: absolute;
            top: 22px;
            display: contents;
            background-color: #00A19D;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
        }

        .bouton {
            text-decoration: none !important;
            border: solid 1px white;
            background-color: #1e90ff;
            border-radius: 15px;
            width: 145px;
            text-align: center;
        }

        .bouton:hover {
            background-color: #007f96;
        }

        .profilPicture {
            width: 82px;
            height: 86px;
            border-radius: 50px;
            position: fixed;
            top: 117px;
            left: 12px;
        }

        .gameCounter {
            border-bottom: solid 1px #bab5b5;
        }

        .titleCount {
            text-align: center;
            font-weight: bold;
            padding-top: 1em;
        }

        .count {
            text-align: center;
            padding-top: 1em;
            font-size: 1em;
        }

        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 300px;
            height: 100vh;
            background: white;
            box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            padding: 20px;
            z-index: 1000;
        }

        .sidebar.open {
            display: flex;
            flex-direction: column;
            transform: translateX(0);
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.3);
            z-index: 999;
        }

        .buttonCreateList {
            border: none;
            border-bottom: solid 1px black;
        }

        .listTitle {
            padding-top: 1em;
            padding-left: 1em;
        }

        .OpensidebarContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding-top: 1em;
        }

        .buttonAddList {
            width: 394px;
            height: 130px;
            background-color: #E7E7E7;
            border: none;
            border-radius: 10px;
            font-size: 1em;
        }

        .buttonAddList p {
            font-size: 1em;
            font-weight: bold;
        }

        .nameList {
            margin: 0;
            padding-right: 10px;
        }

        .cardContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .openGameSidebarre {
            display: flex;
            justify-content: space-between;
            margin: 20px;
        }
    }
</style>
