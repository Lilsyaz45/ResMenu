// navbar.js
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  if (!navbar) return; // safety check

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down → hide navbar
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // scrolling up → show navbar
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
  });
});
