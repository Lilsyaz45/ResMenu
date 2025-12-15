// ---------------- MENU CARDS ----------------
import { menuItems, dessertItems, drinkItems, wineItems } from "/ResMenu/Menu/menuData.js";

// reusable function
function renderMenu(items, rowSelector) {
  const row = document.querySelector(rowSelector);
  if (!row) return;

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
    `;

    row.appendChild(card);
  });
}

// render all sections
renderMenu(menuItems, ".main-dish .food-row");
renderMenu(drinkItems, ".drink-row");
renderMenu(dessertItems, ".dessert-row");
renderMenu(wineItems, ".wine-row");


// TAB SWITCHING ----------------------------------------------------
const tabButtons = document.querySelectorAll(".tab-btn");
const tabSections = document.querySelectorAll(".tab-section");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons
    tabButtons.forEach(b => b.classList.remove("active"));
    
    // Add active to clicked one
    btn.classList.add("active");

    // Get target section
    const target = document.getElementById(btn.dataset.target);
    
    // First, hide all sections with fade out
    tabSections.forEach(sec => {
      if (sec.classList.contains("active")) {
        // Add fade out animation to individual sections
        const sectionsInside = sec.querySelectorAll('.main-dish, .wine, .drink, .dessert');
        sectionsInside.forEach(section => {
          section.style.opacity = '0';
          section.style.transform = 'translateY(30px)';
        });
        
        // Then hide the parent tab section
        setTimeout(() => {
          sec.classList.remove("active");
        }, 300);
      }
    });

    // Show target section after a brief delay
    setTimeout(() => {
      target.classList.add("active");
      
      // Add staggered animation to individual sections inside the active tab
      setTimeout(() => {
        const sectionsInside = target.querySelectorAll('.main-dish, .wine, .drink, .dessert');
        sectionsInside.forEach((section, index) => {
          setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
          }, index * 100); // Stagger the animations
        });
      }, 50);
    }, 350);
  });
});