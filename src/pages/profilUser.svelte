<script>
    import Banniere from "../utils/banniere.svelte";
    let image = "/default-banner.jpg";
    let altText = "Bannière";
    import ProfilPicture from "../utils/profilPicture.svelte";
    let picture = "/default-profilPicture.jpg";
    let TextProfil = "Profil";
    let Pseudo = "Pseudo";
    import Sidebar from "../utils/sidebar.svelte";
    import Card from "../utils/cardGames.svelte";
    export let link;

    let isSidebarOpen1 = false; // État pour la première sidebar
    let isSidebarOpen2 = false; // État pour la deuxième sidebar
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
            !event.target.closest('.openGameSidebarre')
        ) {
            closeSidebar1();
            closeSidebar2();
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
</script>

<main class="mainContainer">
    <Banniere image={image} altText={altText} />
    <img src="../img/gta.jpg" alt="banniere" />

    <div class="profilContainer">
        <ProfilPicture picture={picture} TextProfil={TextProfil} />
        <img class="profilPicture" src="../img/profil.jpg" alt="photo de profil" />
        <p class="ProfilPseudo">jeremy</p>
        <a href="/" class='bouton'>modifier le profil</a>
    </div>

    <div class="gameCounter">
        <h1 class='titleCount'>nombre de jeux</h1>
        <p class='count'>10</p>
    </div>

    <h1 class="listTitle">Listes</h1>

    <!-- Bouton pour ouvrir la première sidebar -->
    <div class="OpensidebarContainer">
        <button class="buttonAddList" on:click={openSidebar1}><p> <i class="fa-solid fa-plus"></i> Ajouter une liste </p></button>

        <!-- Utilisation de Sidebar avec les bonnes props -->
        <Sidebar isOpen={isSidebarOpen1} closeSidebar={closeSidebar1}>
            <h2>Nom</h2>
            <input class="buttonCreateList" type="text" bind:value={listName} placeholder="Nom de la liste" />
            <button on:click={createList}>Créer</button> <!-- Créer la liste -->
        </Sidebar>
    </div>

    <div class="listGame">
        <div class="openGameSidebarre">
            <h2 class="nameList">Mes jeux</h2>
            <!-- Bouton (icône) pour ouvrir la deuxième sidebar -->
            <i class="fa-solid fa-arrow-right" on:click={openSidebar2} style="cursor: pointer;"></i>

            <!-- Sidebar réutilisable -->
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

        /* Styles pour la Sidebar */
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

        /* Overlay si utilisé */
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
            gap: 1em;
            justify-content: center;
            padding-top: 1em;
        }

        .openGameSidebarre {
            display: flex;
            align-items: center;
            width: 100%;
            padding-left: 1em;
            padding-top: 1em;
            gap: 17em;
        }
    }
</style>
