<script>
    import Banniere from "../utils/banniere.svelte";
    let image = "/default-banner.jpg";
    let altText = "Bannière";
</script>

<main class="mainContainer">
    <Banniere image={image} altText={altText} />
    <div class="profilContainer">
        <div class="profilInfo">
            <img src="../img/gta.jpg" alt="banniere">
            

</main>


<style>
      @media (max-width: 500px) {

        img{
            width: 430px;
            height: 187px;
        }
      }
</style>