// 1. Selected item.
// Active Menu
const navbar = document.querySelector(".navbar");
const menuBtn = document.getElementById("menu-btn");
// Account Section
const userAccount = document.querySelector(".user-account");
const accountBtn = document.getElementById("user-btn");
const closeAccountBtn = document.getElementById("close-account");
// Order Section
const orderPlace = document.querySelector(".my-orders");
const orderBtn = document.getElementById("order-btn");
const closeOrderBtn = document.getElementById("close-orders");
// Cart
const cart = document.querySelector(".shopping-cart");
const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart");
// 2. AddeventListener.
menuBtn.addEventListener("click", () => {
  userAccount.classList.remove("active");
  cart.classList.remove("active");
  orderPlace.classList.remove("active");
  navbar.classList.toggle("active");
});
accountBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  cart.classList.remove("active");
  orderPlace.classList.remove("active");
  userAccount.classList.toggle("active");
});
orderBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  cart.classList.remove("active");
  userAccount.classList.remove("active");
  orderPlace.classList.toggle("active");
});
cartBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  orderPlace.classList.remove("active");
  userAccount.classList.remove("active");
  cart.classList.toggle("active");
});
// Close Btn
closeAccountBtn.addEventListener("click", () => {
  userAccount.classList.remove("active");
});
closeOrderBtn.addEventListener("click", () => {
  orderPlace.classList.remove("active");
});
closeCartBtn.addEventListener("click", () => {
  cart.classList.remove("active");
});
// Home Slide
const slides = document.querySelectorAll(
  ".home-bg .home .slide-container .slide"
);
let currentIndex = 0;
function prev() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
}

function next() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}
// FAQ
const accordions = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);
accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    accordions.forEach((item) => {
      if (e.currentTarget != item) item.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});

// Scroll Window
window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
  cart.classList.remove("active");
  orderPlace.classList.remove("active");
});
