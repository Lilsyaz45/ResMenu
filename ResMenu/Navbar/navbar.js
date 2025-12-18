// /ResMenu/Navbar/navbar.js
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Only trigger if scrolled more than 10px to avoid small jumps
    if (Math.abs(currentScroll - lastScrollY) < 10) return;

    if (currentScroll > lastScrollY) {
      // scrolling down → hide navbar
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // scrolling up → show navbar
      navbar.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScroll;
  });
});
