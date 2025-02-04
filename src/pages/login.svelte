<script>
    import FormElement from "../utils/FormElement.svelte";
  
    let email = "";
    let password = "";
  </script>
  
  <header>
    <div class="headerContainer">
      <img src="../img/logo.png" alt="logo">
    </div>
  </header>
  
  <main class="mainContainer">
    <div class="formConnexion">
      <h1 class="titleConnexion">Connexion</h1>
      <form action="/login" method="post">
        
       
        <FormElement type="email" label="Email" name="email" placeholder="Entrez votre email" bind:value={email} />
  
        
        <FormElement type="password" label="Mot de passe" name="password" placeholder="Entrez votre mot de passe" bind:value={password} />
        <div class="lostPassword">
            <a class="lienLost" href="/">mot de passe oublier </a>
        </div>
        <div class="buttonLog">

            <FormElement type="submit" buttonText="Se connecter" />
        </div>
        
        
        <div class="SignUPUser">
              <p class="questionUser"> vous n'avez pas encore de compte ?</p>
              <FormElement type="submit" buttonText="creer un compte" />
            </div>
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
    
    .formConnexion{
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre tout horizontalement */
  justify-content: center; /* Centre verticalement */
  
}

    
    .titleConnexion{
        color: white;
        font-family: roboto;
    }
    .questionUser{
        color: white;
        font-family: inter;
    }

    .lienLost{
        font-family: inter;
        
    }
    .button{
        display: block;
        margin: auto 20 px;
        margin-bottom: 1em;
        margin-top: 1em;

    }
      }
  </style>