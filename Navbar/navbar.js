document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const lines = document.querySelectorAll('.hamburger-line');
  const links = document.querySelectorAll('.mobile-nav-link');

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (Math.abs(currentScroll - lastScrollY) < 10) return;

    navbar.style.transform =
      currentScroll > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';

    lastScrollY = currentScroll;
  });

  const toggleMenu = (open) => {
    mobileMenu.classList.toggle('active', open);
    lines[0].style.transform = open ? 'rotate(45deg) translate(6px,6px)' : 'none';
    lines[1].style.opacity = open ? '0' : '1';
    lines[2].style.transform = open ? 'rotate(-45deg) translate(6px,-6px)' : 'none';
  };

  hamburger.addEventListener('click', () =>
    toggleMenu(!mobileMenu.classList.contains('active'))
  );

  links.forEach(link =>
    link.addEventListener('click', () => toggleMenu(false))
  );

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      toggleMenu(false);
    }
  });
});