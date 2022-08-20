import throttle from "./throttle";

const header = document.querySelector(".header-js");

function floatHeader() {
  if (window.scrollY > 0) {
    header.classList.add("float-js");
  } else {
    header.classList.remove("float-js");
  }
}

window.addEventListener("scroll", throttle(floatHeader, 100));
