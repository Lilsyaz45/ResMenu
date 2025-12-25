// /ResMenu/Menu/menu.js
import { menuItems, dessertItems, drinkItems, wineItems } from "./menuData.js";

function renderMenu(items, rowSelector) {
  const row = document.querySelector(rowSelector);
  if (!row) return;

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
      <div class="image-container">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
    `;
    row.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderMenu(menuItems, ".main-dish .food-row");
  renderMenu(drinkItems, ".drink-row");
  renderMenu(dessertItems, ".dessert-row");
  renderMenu(wineItems, ".wine-row");

  // TAB SWITCHING 
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabSections = document.querySelectorAll(".tab-section");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const target = document.getElementById(btn.dataset.target);

      tabSections.forEach(sec => {
        if (sec.classList.contains("active")) {
          const sectionsInside = sec.querySelectorAll('.main-dish, .wine, .drink, .dessert');
          sectionsInside.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
          });
  
          setTimeout(() => {
            sec.classList.remove("active");
          }, 300);
        }
      });

      setTimeout(() => {
        target.classList.add("active");
        
        setTimeout(() => {
          const sectionsInside = target.querySelectorAll('.main-dish, .wine, .drink, .dessert');
          sectionsInside.forEach((section, index) => {
            setTimeout(() => {
              section.style.opacity = '1';
              section.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }, 50);
      }, 350);
    });
  });
});