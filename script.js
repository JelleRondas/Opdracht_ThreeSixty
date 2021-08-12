const checkpointOpacity = 600;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpointOpacity) {
    opacity = 1 - currentScroll / checkpointOpacity;
  } else {
    opacity = 0;
  }
  document.querySelector(".scroll-container").style.opacity = opacity;
});
