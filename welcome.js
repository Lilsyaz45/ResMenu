document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    const video = box.querySelector('.box-video');
    const thumb = box.querySelector('.box-thumb');

    let hasPlayed = false;

    box.addEventListener('mouseenter', () => {
      box.classList.add('playing');
      video.play().catch(err => console.log(err));

      if (!hasPlayed) {
        thumb.style.opacity = "0";
        thumb.style.pointerEvents = "none";
        hasPlayed = true;
      }

      const overlay = box.querySelector('.box-dark-overlay');
      overlay.style.background = "rgba(0,0,0,0)";
    });

    box.addEventListener('mouseleave', () => {
      video.pause();

      const overlay = box.querySelector('.box-dark-overlay');
      overlay.style.background = "rgba(0,0,0,0.3)";
    });
  });
});


