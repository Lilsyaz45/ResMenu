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

// !-- Mobile Menu Toggle Script -->
document.addEventListener('DOMContentLoaded', function() {
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        
        hamburgerMenu.addEventListener('click', function() {
          mobileMenu.classList.toggle('active');
          
          // Animate hamburger to X
          const lines = document.querySelectorAll('.hamburger-line');
          if (mobileMenu.classList.contains('active')) {
            lines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
          } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
          }
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
          link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const lines = document.querySelectorAll('.hamburger-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
          });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
          const isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
          const isClickInsideMobileMenu = mobileMenu.contains(event.target);
          
          if (!isClickInsideNavbar && !isClickInsideMobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            const lines = document.querySelectorAll('.hamburger-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
          }
        });
      });
