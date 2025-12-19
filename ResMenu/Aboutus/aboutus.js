// aboutus.js
gsap.registerPlugin(ScrollTrigger);

// ---------------- GATE ANIMATION ----------------
gsap.to("#gate > div", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#gate",
    start: "top center",
    end: "center center",
    scrub: 1,
    markers: false
  }
});

// ---------------- CHEF SECTIONS ----------------
const sections = document.querySelectorAll(".chef-section");
const mm = gsap.matchMedia();

/* ================= DESKTOP ANIMATION ================= */
mm.add("(min-width: 769px)", () => {
  sections.forEach((section, index) => {
    const image = section.querySelector(".chef-image");
    const info = section.querySelector(".chef-info");
    if (!image || !info) return;

    const imageX = index % 2 === 0 ? 100 : -100;
    const infoX  = index % 2 === 0 ? -100 : 100;

    gsap.set(image, { x: imageX, opacity: 0 });
    gsap.set(info, { x: infoX, opacity: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: true,              // 🎬 cinematic pin
        anticipatePin: 1,
        markers: false
      }
    })
    .to(image, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0)
    .to(info,  { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0);
  });
});

/* ================= MOBILE ANIMATION ================= */
mm.add("(max-width: 768px)", () => {
  sections.forEach(section => {
    const image = section.querySelector(".chef-image");
    const info = section.querySelector(".chef-info");
    if (!image || !info) return;

    gsap.set([image, info], {
      y: 30,
      opacity: 0
    });

    gsap.to([image, info], {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        markers: false
      }
    });
  });
});

// ---------------- RESPONSIVE NAVBAR ----------------
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (hamburgerMenu && mobileMenu) {
    hamburgerMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Animate hamburger to X
      const lines = document.querySelectorAll('.hamburger-line');
      if (mobileMenu.classList.contains('active')) {
        lines[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
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
      const isClickInsideNavbar = document.querySelector('.navbar')?.contains(event.target);
      const isClickInsideMobileMenu = mobileMenu?.contains(event.target);
      
      if (!isClickInsideNavbar && !isClickInsideMobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        const lines = document.querySelectorAll('.hamburger-line');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
      }
    });
  }
  
  // Add active class to current page link in navbar
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        (currentPage.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
      link.classList.add('active');
    }
  });
});

// ---------------- SMOOTH SCROLL ----------------
document.documentElement.style.scrollBehavior = "smooth";

// Optional: Add scroll-based navbar background change
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = 'none';
  }
});