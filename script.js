const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

var arrimg = [
  "https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1638913665258-ddd2bceafb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  "https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
];
var image1 = document.querySelector("#img1");
var image2 = document.querySelector("#img2");
var abc = 0;
var dog = document.querySelector("#dog img");
dog.addEventListener("mouseover", function () {
  dog.setAttribute(
    "src",
    "https://magasinn.xyz/wordpress/wp-content/uploads/2021/12/img-ZASSHU02-480x480.png"
  );
});
dog.addEventListener("mouseleave", function () {
  dog.setAttribute(
    "src",
    "https://magasinn.xyz/wordpress/wp-content/uploads/2021/12/img-ZASSHU01-480x480.png"
  );
});
image1.addEventListener("mouseover", function () {
  image1.style.backgroundImage = `url(${arrimg[abc++]})`;
  if (abc > 3) abc = 0;
});
var bc = 0;
setInterval(function () {
  image2.style.backgroundImage = `url(${arrimg[bc++]})`;
  if (bc > 3) bc = 0;
}, 1000);
var icon = document.querySelector("#nav>h1");
icon.addEventListener("click", function () {
  document.location.reload(true);
});
var sitara = document.querySelector("#main2>h1");
sitara.addEventListener("click", function () {
  document.querySelector("#bg").scrollTo({
    top: 600,
    behavior: "smooth",
  });
});
var rotate = 0;
setInterval(function () {
  sitara.style.transform = `rotate(${rotate++}deg)`;
}, 30);

var fullscreen = document.querySelector("#fullscreen");
var bg = document.querySelector("#mains");
var arrow = document.querySelector("#select");
arrow.addEventListener("click", function () {
  bg.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.querySelector("#main2").style.opacity = `0`;
  document.querySelector("#main3").style.opacity = `0`;
  setTimeout(function () {
    fullscreen.style.transform = `translateX(-198vh)`;
    document.querySelector("#main").style.opacity = `0`;
  }, 200);
});

var change = document.querySelector("#fullscreen #flowimg");
var changes = document.querySelector("#fullscreen #sideflow");
var lab = 0;
var lablab = 0;
setInterval(() => {
  if (lab > 1200) {
    lab = 0;
  }

  change.scrollTo({
    left: lab,
    behavior: "smooth",
  });
  lab++;
}, 30);
setInterval(() => {
  if (lablab > 600) {
    lablab = 0;
  }
  changes.scrollTo({
    left: lablab,
    behavior: "smooth",
  });
  lablab++;
}, 30);
