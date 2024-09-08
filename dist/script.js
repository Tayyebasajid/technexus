
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY >50) {
      navbar.classList.add('bg-blue', 'shadow-lg');
    } else {
      navbar.classList.remove('bg-blue', 'shadow-lg');
    }
  });
 
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

document.getElementById('menu-close').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
});
