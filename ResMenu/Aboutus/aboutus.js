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

// ---------------- SMOOTH SCROLL ----------------
document.documentElement.style.scrollBehavior = "smooth";
