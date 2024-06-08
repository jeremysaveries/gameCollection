function submitForm() {
    const form = document.getElementById('gameForm');
    const selectedOption = form.querySelector('input[name="game"]:checked');
    
    if (selectedOption) {
        document.getElementById('selectedGame').textContent = selectedOption.value;
    } else {
        document.getElementById('selectedGame').textContent = "Aucune option sélectionnée.";
    }
}