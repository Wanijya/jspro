function changingTheImage() {
  const images = [
    "https://fly.storage.tigris.dev/pai-images/9e8aa36dff4744b8aee4bd3279150fe3.jpeg",
    "https://fly.storage.tigris.dev/pai-images/c9fefd44bba64d729257234aa167e791.jpeg",
    "https://fly.storage.tigris.dev/pai-images/832b738f15614f1fabbc132f0285eaaa.jpeg",
    "https://fly.storage.tigris.dev/pai-images/9c01d941661044669105bb18296a5d05.jpeg",
    "https://fly.storage.tigris.dev/pai-images/a5e4fd975daa4aba87e7b89c474932cb.jpeg",
  ];
  const loaderImg = document.querySelector(".loader-img");

  let index = 0;

  function changeImage() {
    loaderImg.src = images[index];
    index = (index + 1) % images.length;
  }

  setInterval(changeImage, 100);
}
changingTheImage();

var tl = gsap.timeline();
tl.to("#head", {
  left: "-60%",
  duration: 2,
  repeat: -1,
})
.to("#loader", {
  height: 0,
  duration: 1,
  delay: -1,
  ease: Circ.easeInOut,
});


