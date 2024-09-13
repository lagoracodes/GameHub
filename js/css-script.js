const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const hasFade = document.querySelectorAll(".has-fade");
const bgColor = document.querySelector(".bg-color-bubbles");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // close the mobile menu
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    hasFade.forEach(function (element) {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  } else {
    // open the mobile menu
    body.classList.add("no-scroll");
    header.classList.add("open");
    hasFade.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
