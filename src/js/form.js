const signUpForm = document.querySelector(".form-wrapper");
const signUpOpenBtn = document.querySelector(".form-btn-open-js");
const signUpCloseBtn = document.querySelector(".form-btn-close-js");

signUpOpenBtn.addEventListener("click", () => signUpForm.classList.toggle("open-js"));
signUpCloseBtn.addEventListener("click", () => signUpForm.classList.toggle("open-js"));
