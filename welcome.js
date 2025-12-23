document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    const video = box.querySelector(".box-video");
    const source = video.querySelector("source");
    let loaded = false;

    box.addEventListener("mouseenter", async () => {
      box.classList.add("playing");

      if (!loaded) {
        source.src = source.dataset.src;
        video.load();
        loaded = true;
      }

      try {
        await video.play();
      } catch (e) {
        console.log(e);
      }
    });

    box.addEventListener("mouseleave", () => {
      video.pause();
    });
  });
});
