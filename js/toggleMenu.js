document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navbarNav = document.getElementById('navbarNav');
  
    if (menuToggle && navbarNav) {
      menuToggle.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
      });
    }
  });
  
