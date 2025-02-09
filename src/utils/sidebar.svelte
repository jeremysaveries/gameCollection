<script>
  export let isOpen;          // État de la sidebar
  export let closeSidebar;    // Fonction pour fermer la sidebar
</script>

<!-- Overlay qui ferme la sidebar quand on clique dessus -->
<div class="overlay {isOpen ? 'open' : ''}" on:click={closeSidebar}></div>

<!-- Sidebar -->
<div class="sidebar {isOpen ? 'open' : ''}">
  <!-- Bouton pour fermer -->
  <button class="close-btn" on:click={closeSidebar}>❌</button>



  
  <!-- Contenu dynamique -->
  <slot></slot>
</div>

<style>
  /* Style de l'overlay pour foncer le fond */
  .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s;
  }

  .overlay.open {
      opacity: 1;
      visibility: visible;
  }

  /* Style de la sidebar pleine page */
  .sidebar {
      position: fixed;
      top: 0;
      left: -100%;
      width: 100vw;
      height: 100vh;
      background: white;
      transition: left 0.3s ease;
      padding: 20px;
  }

  .sidebar.open {
      left: 0;
  }

  /* Style du bouton de fermeture */
  .close-btn {
      
      color: black;
      border: none;
      padding: 10px;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
  }
</style>
