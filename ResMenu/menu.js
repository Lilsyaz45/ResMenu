// ---------------- MENU CARDS ----------------
import { menuItems } from "./menuData.js";


const foodRow = document.querySelector(".food-row");

// Generate menu cards dynamically
menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "food-card";

  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
  `;

  foodRow.appendChild(card);
});

import { dessertItems } from "./menuData.js";

const dessertRow = document.querySelector(".dessert-row");

// Generate dessert cards dynamically
dessertItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "food-card";

  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
  `;

  dessertRow.appendChild(card);
});


import { drinkItems } from "./menuData.js";

const drinkRow = document.querySelector(".drink-row");

// Generate dessert cards dynamically
drinkItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "food-card";

  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
  `;

  drinkRow.appendChild(card);
});

import { wineItems } from "./menuData.js";

const wineGrid = document.querySelector(".wine-grid");
    wineItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "food-card";
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      `;
      wineGrid.appendChild(card);
    });

// TAB SWITCHING ----------------------------------------------------

const tabButtons = document.querySelectorAll(".tab-btn");
const tabSections = document.querySelectorAll(".tab-section");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active from all buttons
    tabButtons.forEach(b => b.classList.remove("active"));

    // add active to clicked one
    btn.classList.add("active");

    // hide all sections
    tabSections.forEach(sec => sec.classList.remove("active"));

    // show target section
    const target = document.getElementById(btn.dataset.target);
    target.classList.add("active");
  });
});