const cards = document.querySelectorAll(".card");
const dotsContainer = document.getElementById("dots-container");
let index = 0;
let autoPlayInterval;

// Create dots
cards.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === index) dot.classList.add("active");

    dot.addEventListener("click", () => {
        index = i;
        update();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function update() {
    cards.forEach((card, i) => {
        const pos = ((i - index) + 5) % 5;

        if (pos === 0) {
            card.style.transform = "translateX(-300px) rotateY(35deg) scale(0.8)";
            card.style.opacity = "0.6";
            card.style.zIndex = "1";
            card.querySelector(".card-content").style.opacity = "0";
        } 
        else if (pos === 1) {
            card.style.transform = "translateX(-150px) rotateY(20deg) scale(0.9)";
            card.style.opacity = "0.8";
            card.style.zIndex = "2";
            card.querySelector(".card-content").style.opacity = "0";
        }
        else if (pos === 2) {
            card.style.transform = "translateX(0) rotateY(0deg) scale(1.15)";
            card.style.opacity = "1";
            card.style.zIndex = "10";
            card.querySelector(".card-content").style.opacity = "1";
        }
        else if (pos === 3) {
            card.style.transform = "translateX(150px) rotateY(-20deg) scale(0.9)";
            card.style.opacity = "0.8";
            card.style.zIndex = "2";
            card.querySelector(".card-content").style.opacity = "0";
        }
        else if (pos === 4) {
            card.style.transform = "translateX(300px) rotateY(-35deg) scale(0.8)";
            card.style.opacity = "0.6";
            card.style.zIndex = "1";
            card.querySelector(".card-content").style.opacity = "0";
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function move(dir) {
    index = (index + dir + 5) % 5;
    update();
    resetAutoPlay();
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") move(-1);
    else if (e.key === "ArrowRight") move(1);
});

// Auto-play
function startAutoPlay() {
    autoPlayInterval = setInterval(() => move(1), 2500);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Initialize
update();
startAutoPlay();