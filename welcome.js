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

    box.addEventListener("mouseenter", playVideo);
    box.addEventListener("mouseleave", stopVideo);

    box.addEventListener("touchstart", playVideo, { passive: true });
  });
});
