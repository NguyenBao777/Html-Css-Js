document.addEventListener("DOMContentLoaded", () => {
  // navbar
  const menu = document.querySelector(".navbar");
  const menuBtn = document.getElementById("menu-btn");
  // search
  const searchBtn = document.getElementById("search-btn");
  const searchBar = document.querySelector(".search-bar");
  const searchBox = document.getElementById("search-box");
  const populaMenu = document.querySelectorAll(".menu .box-container .box");
  // cart
  const cartBtn = document.getElementById("cart-btn");
  const cartContainer = document.querySelector(".cart-container");
  const addToCartBtns = document.querySelectorAll(
    ".menu .box-container .box .btn"
  );
  // gallery
  // const galleryImgs = document.querySelectorAll(".gallery .box-container img");
  // const galleryModal = document.querySelector(".gallery .modal");
  // const loseModal = galleryModal.querySelector(".fa-times");
  // galleryImgs.forEach((image) => {
  //   image.addEventListener("click", (e) => {
  //     const modalImg = galleryModal.querySelector("img");
  //     modalImg.src = e.currentTarget.src;
  //     galleryModal.classList.add("open-modal");
  //   });
  // });

  // loseModal.addEventListener("click", () => {
  //   galleryModal.classList.remove("open-modal");
  // });

  menuBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("fa-times");
    cartContainer.classList.remove("open");
    menu.classList.toggle("open");
  });

  searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("open");
  });
  searchBox.addEventListener("blur", () => {
    searchBar.classList.remove("open");
  });
  searchBox.addEventListener("input", () => {
    const txtSearch = searchBox.value.trim().toLowerCase();
    populaMenu.forEach((item) => {
      const itemTxt = item.innerText.trim().toLowerCase();
      if (!itemTxt.includes(txtSearch)) {
        item.classList.add("blur");
      } else {
        item.classList.remove("blur");
      }
    });
  });

  addToCartBtns.forEach((addToCartBtn) => {
    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const parentElement = e.currentTarget.parentElement;
      addToCart(parentElement);
    });
  });

  // Function
  function addToCart(parent) {
    const cartContainer = document.querySelector(".cart-container .cart-body");

    const divElement = document.createElement("div");
    divElement.classList.add("cart-box");
    const objParent = {
      parentName: parent.querySelector("h3").innerText,
      parentImage: parent.querySelector("img").src,
      parentPrice: parent.querySelector("p").innerText,
    };
    divElement.innerHTML = `<div class="cart-box-image">
      <span class="overlay"></span>
      <img src="${objParent.parentImage}" alt="" />
    </div>
    <div class="cart-box-content">
      <h4>${objParent.parentName}</h4>
      <p>${objParent.parentPrice}</p>
    </div>
    <button class="btn fa fa-times"></button>`;

    cartContainer.appendChild(divElement);
    // Count the cart
    countCart();
    // Remove cart
    const removeCartBtns = document.querySelectorAll(".cart-box .fa-times");

    removeCartBtns.forEach((removeBtn) => {
      const removeParent = removeBtn.parentElement;
      removeBtn.addEventListener("click", () => {
        removeCart(removeParent);
      });
    });
  }

  function countCart() {
    // Count the cart
    const cartItem = document.querySelectorAll(
      ".cart-container .cart-body .cart-box"
    );
    let count;
    cartItem.length < 10
      ? (count = "0" + cartItem.length)
      : (count = cartItem.length);
    cartItem.length > 99 ? (count = 99) : (count = count);
    const notificationCart = document.querySelector("#cart-btn .badge");
    notificationCart.innerText = count;
  }
  function removeCart(removeParent) {
    removeParent.remove();
    countCart();
  }

  cartBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    cartContainer.classList.toggle("open");
  });
  /******************************************* Menu Page ******************************************************/
  const nextBtn = document.querySelector(".top-slide .next-btn");
  const prevBtn = document.querySelector(".top-slide .prev-btn");
  let currentIndex = 0;

  nextBtn.addEventListener("click", () => {
    slideControl("next");
  });
  prevBtn.addEventListener("click", () => {
    slideControl("prev");
  });

  function slideControl(param) {
    const slideItems = document.querySelectorAll(
      ".top-slide .slide-container .slide-item"
    );
    const slideContainer = document.querySelector(
      ".top-slide .slide-container"
    );
    param == "next" ? currentIndex++ : currentIndex--;

    slideContainer.style.transform = `translateX(${slideItems[currentIndex].offsetLeft}px)`;
    console.log(slideItems[currentIndex].offsetLeft);
  }
});
