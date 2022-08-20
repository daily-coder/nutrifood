const menuBtn = document.querySelector(".menu-btn-js");
const menuBtnBurger = document.querySelector(".menu-btn__burger-js");
const nav = document.querySelector(".nav-js");
const overlay = document.querySelector(".overlay-js");

function toggleClass(elements, className) {
  elements.forEach((element) => {
    element.classList.toggle(className);
  });
}

menuBtn.addEventListener("click", () => toggleClass([menuBtnBurger, nav, overlay], "open-js"));
