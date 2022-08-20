import throttle from "./throttle";

const reviewsSlider = document.querySelector(".reviews__slider-js");
const reviews = document.querySelectorAll(".review-js");
const prevBtn = document.querySelector(".slider-btn-left-js");
const nextBtn = document.querySelector(".slider-btn-right-js");

const MARGIN = 64;
let counter = 1;
let size = reviews[0].clientWidth + MARGIN;

// slider needs to start from second image
reviewsSlider.style.transform = `translateX(${-size * counter}px)`;

/**
 * NOTE:
 * If we use toggle method then transition: none is applied even if we didn't reach
 * end of the reviews-slider. That's why we are using remove method
 */

function slideLeft() {
  if (counter >= reviews.length - 1) return;
  reviewsSlider.classList.remove("no-transition-js");
  counter++;
  reviewsSlider.style.transform = `translateX(${-size * counter}px)`;
}

function slideRight() {
  if (counter <= 0) return;
  reviewsSlider.classList.remove("no-transition-js");
  counter--;
  reviewsSlider.style.transform = `translateX(${-size * counter}px)`;
}

/**
 * we created a clone of the first and the last image to create slide loop which never ends.
 * we need to slide to original image when we reach clone.
 */
function slideToOriginal() {
  if (reviews[counter].id === "first-clone") {
    reviewsSlider.classList.add("no-transition-js");
    counter = reviews.length - counter;
    reviewsSlider.style.transform = `translateX(${-size * counter}px)`;
  } else if (reviews[counter].id === "last-clone") {
    reviewsSlider.classList.add("no-transition-js");
    counter = reviews.length - 2;
    reviewsSlider.style.transform = `translateX(${-size * counter}px)`;
  }
}

// when user resizes we need to change size variable
function setSize() {
  size = reviews[0].clientWidth + MARGIN;
  reviewsSlider.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener("click", slideLeft);
prevBtn.addEventListener("click", slideRight);
reviewsSlider.addEventListener("transitionend", slideToOriginal);
window.addEventListener("resize", throttle(setSize, 100));
