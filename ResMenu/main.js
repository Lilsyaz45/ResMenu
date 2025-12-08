// ---------------- HERO SLIDESHOW ----------------

const slides = [
  {
    letters: ["S","T","E","A","K"],
    imgSrc: "img/hero.png",
    imgAlt: "Premium Steak",
    scale: 1.4,
    offsetY: "-50%",
    fontSize:"300px"
  },
  {
    letters: ["P","A","S","T","A"],
    imgSrc: "img/hero1.png",
    imgAlt: "Pasta Dish",
    scale: 1.05,
    offsetY: "-50%",
    fontSize: "300px"
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
}, 4000);






// ---------------- MENU CARDS ----------------
// import { menuItems } from "./menuData.js";


// const foodRow = document.querySelector(".food-row");

// // Generate menu cards dynamically
// menuItems.forEach(item => {
//   const card = document.createElement("div");
//   card.className = "food-card";

//   card.innerHTML = `
//     <img src="${item.img}" alt="${item.name}">
//     <h3>${item.name}</h3>
//     <p>$${item.price}</p>
//   `;

//   foodRow.appendChild(card);
// });

// import { dessertItems } from "./menuData.js";

// const dessertRow = document.querySelector(".dessert-row");

// Generate dessert cards dynamically
// dessertItems.forEach(item => {
//   const card = document.createElement("div");
//   card.className = "food-card";

//   card.innerHTML = `
//     <img src="${item.img}" alt="${item.name}">
//     <h3>${item.name}</h3>
//     <p>$${item.price}</p>
//   `;

//   dessertRow.appendChild(card);
// });


// import { drinkItems } from "./menuData.js";

// const drinkRow = document.querySelector(".drink-row");

// Generate dessert cards dynamically
// drinkItems.forEach(item => {
//   const card = document.createElement("div");
//   card.className = "food-card";

//   card.innerHTML = `
//     <img src="${item.img}" alt="${item.name}">
//     <h3>${item.name}</h3>
//     <p>$${item.price}</p>
//   `;

//   drinkRow.appendChild(card);
// });

// import { wineItems } from "./menuData.js";

// const wineGrid = document.querySelector(".wine-grid");
//     wineItems.forEach(item => {
//       const card = document.createElement("div");
//       card.className = "food-card";
//       card.innerHTML = `
//         <img src="${item.img}" alt="${item.name}">
//         <h3>${item.name}</h3>
//         <p>$${item.price}</p>
//       `;
//       wineGrid.appendChild(card);
//     });

// TAB SWITCHING ----------------------------------------------------

// const tabButtons = document.querySelectorAll(".tab-btn");
// const tabSections = document.querySelectorAll(".tab-section");

// tabButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
    // remove active from all buttons
    // tabButtons.forEach(b => b.classList.remove("active"));

    // add active to clicked one
    // btn.classList.add("active");

    // hide all sections
    // tabSections.forEach(sec => sec.classList.remove("active"));

    // show target section
//     const target = document.getElementById(btn.dataset.target);
//     target.classList.add("active");
//   });
// });






