document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('menu-deroulant');

    console.log('menuToggle:', menuToggle);
    console.log('menu-deroulant:', navLinks);

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior
            navLinks.classList.toggle('show');
        }, { passive: true }); // Mark the event listener as passive
    } else {
        console.error('Menu toggle or nav links element not found.');
    }
});
