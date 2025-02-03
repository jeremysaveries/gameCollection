<script>
  export let showLogo = true; // Une prop pour décider si le logo doit être affiché
</script>

<header>
  {#if showLogo}
    <img src="../img/logo.png" alt="logo">
  {/if}
</header>