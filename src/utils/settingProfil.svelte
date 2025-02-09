<script>
  function déconnexion() {
	// Add your logout logic here
	console.log('User logged out');
  }

  function supprimeCompte() {
	// Add your delete account logic here
	console.log('Account deleted');
  }
</script>

<div class="settingContainer">
<input type="button" value="déconnexion du compte" class="settingButton" on:click={déconnexion} />
<input type="button" value="supprimer le compte" class="deleteButton" on:click={supprimeCompte} />
</div>