var typed = new Typed(".auto-type", {
  strings: [
    " I'M Programmer",
    " I'M Youtuber",
    "I'M Web Developer",
    "I'M Content Writter",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

let bto = document.querySelector(".bto");
let login = document.querySelector(".login-input");
let success = document.querySelector(".hide");

bto.addEventListener("click", () => {
  alert("login is Succesful")
  login.classList.add("hide");
  login.classList.remove("login-input");
  success.classList.add("success");
  success.classList.remove("hide");
  bto.disabled=true;
});

let home = document.querySelector(".home");
let menu = document.querySelector(".menu");
let services = document.querySelector(".servi");
let track = document.querySelector(".tracke");
let about = document.querySelector(".abut");
let legi = document.querySelector(".legi");

// icon
let ico1 = document.querySelector("#ico1");
let ico2 = document.querySelector("#ico2");
let ico3 = document.querySelector("#ico3");
let ico4 = document.querySelector("#ico4");
let ico5 = document.querySelector("#ico5");
let ico6 = document.querySelector("#ico6");

home.addEventListener("click", () => {
  home.style.color = "aqua";
  menu.style.color = "black";
  services.style.color = "black";
  track.style.color = "black";
  about.style.color = "black";
  legi.style.color = "white";

  ico1.style.color = "aqua";
  ico2.style.color = "black";
  ico3.style.color = "black";
  ico4.style.color = "black";
  ico5.style.color = "black";
  ico6.style.color = "white";
});

menu.addEventListener("click", () => {
  home.style.color = "black";
  menu.style.color = "aqua";
  services.style.color = "black";
  track.style.color = "black";
  about.style.color = "black";
  legi.style.color = "white";

  ico1.style.color = "black";
  ico2.style.color = "aqua";
  ico3.style.color = "black";
  ico4.style.color = "black";
  ico5.style.color = "black";
  ico6.style.color = "white";
});

services.addEventListener("click", () => {
  home.style.color = "black";
  menu.style.color = "black";
  services.style.color = "aqua";
  track.style.color = "black";
  about.style.color = "black";
  legi.style.color = "white";

  ico1.style.color = "black";
  ico2.style.color = "black";
  ico3.style.color = "aqua";
  ico4.style.color = "black";
  ico5.style.color = "black";
  ico6.style.color = "white";
});

track.addEventListener("click", () => {
  home.style.color = "black";
  menu.style.color = "black";
  services.style.color = "black";
  track.style.color = "aqua";
  about.style.color = "black";
  legi.style.color = "white";

  ico1.style.color = "black";
  ico2.style.color = "black";
  ico3.style.color = "black";
  ico4.style.color = "aqua";
  ico5.style.color = "black";
  ico6.style.color = "white";
});

about.addEventListener("click", () => {
  home.style.color = "black";
  menu.style.color = "black";
  services.style.color = "black";
  track.style.color = "black";
  about.style.color = "aqua";
  legi.style.color = "white";

  ico1.style.color = "black";
  ico2.style.color = "black";
  ico3.style.color = "black";
  ico4.style.color = "black";
  ico5.style.color = "aqua";
  ico6.style.color = "white";
});

legi.addEventListener("click", () => {
  home.style.color = "black";
  menu.style.color = "black";
  services.style.color = "black";
  track.style.color = "black";
  about.style.color = "black";
  legi.style.color = "aqua";

  ico1.style.color = "black";
  ico2.style.color = "black";
  ico3.style.color = "black";
  ico4.style.color = "black";
  ico5.style.color = "black";
  ico6.style.color = "aqua";
});


