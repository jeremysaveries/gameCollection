<script>
    export let type = "text";         // Type d'élément (text, email, password, button...)
    export let label = "";             // Texte du label (facultatif pour les boutons)
    export let placeholder = "";       // Texte du placeholder (seulement pour les inputs)
    export let name = "";              // Nom de l'input
    export let value = "";             // Valeur bindable (utile pour les inputs)
    export let buttonText = "";        // Texte du bouton (si c'est un bouton)
    export let onClick = null;         // Fonction à exécuter quand on clique sur le bouton
  </script>
  
  <div class="input-group">
    {#if type === "button" || type === "submit"}
      <button type={type} on:click={onClick}>{buttonText}</button>
    {:else}
      <label for={name}>{label}</label>
      <input id={name} type={type} name={name} placeholder={placeholder} bind:value />
    {/if}
  </div>
  
  <style>
    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }
  
    label {
     font-size: 15px;
      color: white;
      margin-bottom: 5px;
      font-family: inter;
    }
  
    input {
      width: 231px;
      height: 45px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      background-color: #00B0FC;
      color: white;
      padding: 10px 15px;
      margin: 20px auto 20px 25px; 
      border: none;
      border-radius: 13px;
      cursor: pointer;
      width: 177px;
      height: 65px;
      font-size: 16px;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  
  