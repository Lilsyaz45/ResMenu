//HERO SLIDESHOW 
const slides = [
  {
    letters: ["S","T","E","A","K"],
    imgSrc: "steak.png",
    imgAlt: "Premium Steak",
    scale: 1,
    offsetY: "-50%",
    fontSize: "18vw",      
    lettersGap: "clamp(0.5rem, 10vw, 6rem)"
  },
  {
    letters: ["P","A","S","T","A"],
    imgSrc: "pasta.png",
    imgAlt: "Pasta Dish",
    scale: 1,
    offsetY: "-50%",
    fontSize: "18vw",     
    lettersGap: "clamp(0.5rem, 10vw, 6rem)"
  }
];

let current = 0;

const heroText = document.getElementById("heroText");
const heroImage = document.getElementById("heroImage");
const heroImgContainer = document.querySelector(".hero-image-container");
const slideDuration = 600;

heroText.style.transition = `transform ${slideDuration}ms ease, opacity ${slideDuration}ms ease`;
heroImage.style.transition = `transform ${slideDuration}ms ease, opacity ${slideDuration}ms ease`;

function renderSlide(idx) {
  const slide = slides[idx];

  heroText.style.transform = "translateX(100px)";
  heroImage.style.transform = "translateX(100px)";
  heroText.style.opacity = 0;
  heroImage.style.opacity = 0;

  heroImgContainer.style.display = "block";

  setTimeout(() => {
    heroText.style.gap = slide.lettersGap || "4rem";

    heroText.innerHTML = "";

    slide.letters.forEach(letter => {
      const h = document.createElement("h1");
      h.className = "hero-title";
      h.textContent = letter;
      heroText.append(h);
    });

    heroImage.src = slide.imgSrc;
    heroImage.alt = slide.imgAlt;

    heroImgContainer.style.transform = 
      `translate(-50%, ${slide.offsetY}) scale(${slide.scale})`;

    requestAnimationFrame(() => {
      heroText.style.transform = "translateX(0)";
      heroImage.style.transform = "translateX(0)";
      heroText.style.opacity = 1;
      heroImage.style.opacity = 1;
    });

  }, slideDuration);
}

heroText.style.opacity = 1;
heroImage.style.opacity = 1;
renderSlide(current);

setInterval(() => {
  current = (current + 1) % slides.length;
  renderSlide(current);
}, 4000);














