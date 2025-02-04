<script>
  import FormElement from "../utils/FormElement.svelte";

  let email = "";
  let confirmEmail = "";
  let pseudo = "";
  let password = "";
  let confirmPassword = "";
</script>

<header>
  <div class="headerContainer">
    <img src="../img/logo.png" alt="logo">
  </div>
</header>

<main class="mainContainer">
  <div class="formInscription">
    <h1 class="titleInscription">Inscription</h1>
    <form action="/inscription" method="post">
      
      <p>* Votre adresse mail :</p>
      <FormElement type="email" label="Email" name="email" placeholder="Entrez votre email" bind:value={email} />
      <FormElement type="email" label="Confirmer l'email" name="confirmEmail" placeholder="Retapez votre email" bind:value={confirmEmail} />

      <p>* Votre pseudo :</p>
      <FormElement type="text" label="Pseudo" name="pseudo" placeholder="Choisissez un pseudo" bind:value={pseudo} />

      <p>* Votre mot de passe :</p>
      <FormElement type="password" label="Mot de passe" name="password" placeholder="Entrez votre mot de passe" bind:value={password} />
      <FormElement type="password" label="Confirmer le mot de passe" name="confirmPassword" placeholder="Retapez votre mot de passe" bind:value={confirmPassword} />

      <FormElement type="submit" buttonText="S'inscrire" />
    </form>
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
.formInscription{
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre tout horizontalement */
  justify-content: center; /* Centre verticalement */
  
}
.titleInscription{
  color: white;
  font-family: roboto;
}

* p{
  color: white;
  font-family: roboto;
  font-size: 20px;
  font-weight: bold;
}
}
</style>