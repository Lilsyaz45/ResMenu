document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    const video = box.querySelector('.box-video');

    box.addEventListener('mouseenter', () => {
      box.classList.add('playing');
      video.currentTime = 0;
      video.play().catch(err => {
        // autoplay might be blocked — you can handle fallback here
        console.log('Video play was prevented.', err);
      });
    });

    box.addEventListener('mouseleave', () => {
      video.pause();
      box.classList.remove('playing');
    });
  });
});
