document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    const video = box.querySelector('.box-video');
    const thumb = box.querySelector('.box-thumb');

    let hasPlayed = false; // track if hovered once

    box.addEventListener('mouseenter', () => {
      box.classList.add('playing');
      video.play().catch(err => console.log(err));

      if (!hasPlayed) {
        // permanently hide thumbnail after first hover
        thumb.style.opacity = "0";
        thumb.style.pointerEvents = "none";
        hasPlayed = true;
      }

      // Remove dark overlay during hover
      const overlay = box.querySelector('.box-dark-overlay');
      overlay.style.background = "rgba(0,0,0,0)";
    });

    box.addEventListener('mouseleave', () => {
      video.pause();

      // Add slight dark overlay after hover ends
      const overlay = box.querySelector('.box-dark-overlay');
      overlay.style.background = "rgba(0,0,0,0.3)";
    });
  });
});


