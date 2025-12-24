document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    const video = box.querySelector(".box-video");
    const source = video.querySelector("source");
    let loaded = false;

    const playVideo = async () => {
      if (!loaded) {
        source.src = source.dataset.src;
        video.load();
        loaded = true;
      }

      try {
        await video.play();
        box.classList.add("playing");
      } catch (e) {
        console.log(e);
      }
    };

    const stopVideo = () => {
      video.pause();
      box.classList.remove("playing");
    };

    /* Desktop */
    box.addEventListener("mouseenter", playVideo);
    box.addEventListener("mouseleave", stopVideo);

    /* Mobile (iOS & Android) */
    box.addEventListener("touchstart", playVideo, { passive: true });
  });
});
