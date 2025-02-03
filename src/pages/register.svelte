<script>
  import Header from '../partials/header.svelte'
</script>

<Header showLogo={true} style="display: none; width: 300px; height: 300px; :margin-bottom: 10px;" />

<main>
  <div class="formInscription">
    <h1 class="titleInscription">inscription</h1>
    <div class="formMail">
      <form action="/inscription" method="post">
        <p>* Votre adresse mail :</p>
        <label for="email"></label>
        <input type="email" id="email" name="email" required placeholder="email">

        <label for="confirmEmail"></label>
        <input type="email" id="confirmEmail" name="confirmEmail" required placeholder="retaper votre email">
    </div>

    <div class="formPseudo">
      <p>* Votre pseudo</p>
      <label for="pseudo"></label>
      <input type="text" id="pseudo" name="pseudo" required placeholder="pseudo">
    </div>

    <div class="formPassword">
      <p>* Votre mot de passe</p>
      <label for="password"></label>
      <input type="password" id="password" name="password" required placeholder="mot de passe">

      <label for="confirmPassword"></label>
      <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="retaper votre mot de passe">
    </div>

    <button type="submit">S'inscrire</button>
      <form>
  </div>
</main>

<style>
  @media (max-width: 500px) {
    :global(body) {
      background-color: #272727 !important; /* Gris foncé */
      margin: 0;
      padding: 0;
    }

    p{
      color: white;
    }

   .titleInscription {
    color: white;
    margin: 0;
    padding: 0;
   }

  
    .formInscription {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      
    }

  .formMail, .formPseudo, .formPassword {
    margin-bottom: 20px;
  }
  .header {
  width: 100px; /* Ajuste la largeur de l'image */
  height: auto; /* Maintient les proportions de l'image */
}
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 306px;
    height: 45px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #00B0FC;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 13px;
    cursor: pointer;
    width: 221px;
    height:  98px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
}
</style>
