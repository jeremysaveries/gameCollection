<!-- ProfileImageUpload.svelte -->
<script>
    let file;
    let previewUrl = "";  // Pour l'aperçu de l'image avant l'upload
  
    // Fonction pour gérer l'upload du fichier
    function handleFileUpload(event) {
      file = event.target.files[0];
      if (file) {
        // Créer un aperçu de l'image
        previewUrl = URL.createObjectURL(file);
      }
    }
  
    // Fonction pour envoyer l'image (simulé, sans backend pour le moment)
    function uploadProfileImage() {
      if (file) {
        console.log("Image uploadée: ", file.name);
        // Ici, tu pourrais envoyer l'image à ton backend
        // Par exemple, avec une API ou autre
      }
    }
  </script>
  
  <div class="upload-container">
<h3 class="title">choisir une photo de profil</h3>
    <!-- Aperçu de l'image -->
    {#if previewUrl}
      <img src={previewUrl} alt="Aperçu de l'image" class="profile-image-preview" />
    {/if}
  
    <!-- Input pour le téléchargement du fichier -->
    <input type="file" accept="image/*" on:change={handleFileUpload} />
  
    <!-- Bouton pour uploader l'image -->
    <button on:click={uploadProfileImage} class="upload-button">Télécharger l'image</button>
  </div>
  
  <style>
    .upload-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .profile-image-preview {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  
    .upload-button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #0E85F4;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
       border-bottom: solid 1px;
    }
  .title{
    padding-bottom: 1em;
    border-top: solid 1px;
  }
  
    .upload-button:hover {
      background-color: #003B44;
    }
  </style>
  