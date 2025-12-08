// aboutus.js

gsap.registerPlugin(ScrollTrigger);

// Gate animation
gsap.to("#gate > div", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#gate",
        start: "top center",
        end: "center center",
        scrub: 1,
        markers: false
    }
});

// Chef sections animations
const chefSections = document.querySelectorAll(".chef-section");

chefSections.forEach((section, index) => {
    const chefImage = section.querySelector(".chef-image");
    const chefInfo = section.querySelector(".chef-info");
    
    // Alternate direction based on index
    const imageX = index % 2 === 0 ? 100 : -100;
    const infoX = index % 2 === 0 ? -100 : 100;
    
    // Initial state
    gsap.set(chefImage, { x: imageX, opacity: 0 });
    gsap.set(chefInfo, { x: infoX, opacity: 0 });
    
    // Pinned animation
    gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            pin: true,
            markers: false
        }
    })
    .to(chefImage, { x: 0, opacity: 1, duration: 1 }, 0)
    .to(chefInfo, { x: 0, opacity: 1, duration: 1 }, 0);
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth";
