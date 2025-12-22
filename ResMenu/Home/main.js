// ---------------- HERO SLIDESHOW 
const slides = [
  {
    letters: ["S","T","E","A","K"],
    imgSrc: "/ResMenu/img/hero.png",
    imgAlt: "Premium Steak",
    scale: 1.4,
    offsetY: "-50%",
    fontSize: "18vw",        // recommended: use vw so letters scale with viewport
    lettersGap: "clamp(0.5rem, 10vw, 6rem)"
  },
  {
    letters: ["P","A","S","T","A"],
    imgSrc: "/ResMenu/img/hero1.png",
    imgAlt: "Pasta Dish",
    scale: 1.05,
    offsetY: "-50%",
    fontSize: "18vw",        // recommended: use vw so letters scale with viewport
    lettersGap: "clamp(0.5rem, 10vw, 6rem)"
  }
];

let current = 0;

const heroText = document.getElementById("heroText");
const heroImage = document.getElementById("heroImage");
const heroImgContainer = document.querySelector(".hero-image-container");

// Slide animation speed
const slideDuration = 600; // ms

// Apply initial CSS for animation
heroText.style.transition = `transform ${slideDuration}ms ease, opacity ${slideDuration}ms ease`;
heroImage.style.transition = `transform ${slideDuration}ms ease, opacity ${slideDuration}ms ease`;

function renderSlide(idx) {
  const slide = slides[idx];

  // Reset transform to slide-in state
  heroText.style.transform = "translateX(100px)";
  heroImage.style.transform = "translateX(100px)";
  heroText.style.opacity = 0;
  heroImage.style.opacity = 0;

  heroImgContainer.style.display = "block";

  setTimeout(() => {
    // Set letter spacing
    heroText.style.gap = slide.lettersGap || "4rem";

    // Clear old letters
    heroText.innerHTML = "";

    // Add new letters
    slide.letters.forEach(letter => {
      const h = document.createElement("h1");
      h.className = "hero-title";
      h.textContent = letter;
      heroText.append(h);
    });

    // Update hero image
    heroImage.src = slide.imgSrc;
    heroImage.alt = slide.imgAlt;

    // Apply offset + scale
    heroImgContainer.style.transform = 
      `translate(-50%, ${slide.offsetY}) scale(${slide.scale})`;

    // Animate slide in
    requestAnimationFrame(() => {
      heroText.style.transform = "translateX(0)";
      heroImage.style.transform = "translateX(0)";
      heroText.style.opacity = 1;
      heroImage.style.opacity = 1;
    });

  }, slideDuration);
}

// First display
renderSlide(current);

// Auto-slide every 4 seconds
setInterval(() => {
  renderSlide(current);
  current = (current + 1) % slides.length;
  renderSlide(current);
}, 4000);













