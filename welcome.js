document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  const stopAllVideos = () => {
    boxes.forEach(b => {
      const v = b.querySelector(".box-video");
      v.pause();
      b.classList.remove("playing");
    });
  };

  boxes.forEach(box => {
    const video = box.querySelector(".box-video");
    const source = video.querySelector("source");
    let loaded = false;

    const playVideo = async () => {
      // ⛔ STOP others first (mobile fix)
      stopAllVideos();

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

    /* Desktop hover */
    box.addEventListener("mouseenter", playVideo);
    box.addEventListener("mouseleave", stopVideo);

    /* Mobile touch */
    box.addEventListener("touchstart", playVideo, { passive: true });
  });
});
