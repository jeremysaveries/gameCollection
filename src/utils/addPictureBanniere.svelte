<script>
    // Liste des URLs des images internes
    let predefinedBanners = [
        "/img/gta.jpg",
        "/img/jackette/game-month/starwars.jpeg",
        "/img/jackette/game-month/finalfantasy.jpg",
        "/assets/images/banners/dlcelden.jpeg"
    ];

    let bannerUrl = predefinedBanners[0]; // Bannière principale par défaut
    let selectedBanner = predefinedBanners[0]; // Bannière temporairement sélectionnée

    // Fonction pour sélectionner temporairement une bannière
    function selectBanner(url) {
        selectedBanner = url; // Met à jour la bannière temporaire
    }

    // Fonction pour confirmer la sélection de la bannière
    function confirmBanner() {
        bannerUrl = selectedBanner; // Met à jour la bannière principale avec la sélection
        console.log("Nouvelle bannière confirmée :", bannerUrl);
    }
</script>

<div class="banner-container">
    <!-- Affichage de la bannière principale -->


    <!-- Titre pour la section de sélection -->
    <h3 class="title">Choisir une nouvelle bannière :</h3>

    <!-- Liste des bannières disponibles -->
    <div class="banner-options">
        {#each predefinedBanners as banner}
            <img
                src={banner}
                alt="Option de bannière"
                class="banner-option {banner === selectedBanner ? 'selected' : ''}"
                on:click={() => selectBanner(banner)} 
            />
        {/each}
    </div>
    <img src={bannerUrl} alt="Bannière actuelle" class="banner-image" />
    <!-- Bouton pour confirmer le choix -->
    <button on:click={confirmBanner} class="confirm-button">
        Confirmer la bannière
    </button>
</div>

<style>
    .banner-container {
        text-align: center;
        padding: 20px;
        border-top: solid 1px ;
        padding-bottom: 1em;
    }

    .banner-image {
        width: 100%;
        max-width: 1200px;
        height: 400px;
        object-fit: cover;
        margin-bottom: 20px;
    }

    .title {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    .banner-options {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .banner-option {
        width: 150px;
        height: 50px;
        object-fit: cover;
        border: 2px solid transparent;
        cursor: pointer;
        transition: border-color 0.3s ease;
    }

    .banner-option:hover {
        border-color: #004F5C;
    }

    .banner-option.selected {
        border-color: #ff9800; /* Couleur pour indiquer la sélection */
    }

    .confirm-button {
        padding: 10px 20px;
        background-color: #004F5C;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .confirm-button:hover {
        background-color: #003B44;
    }
</style>