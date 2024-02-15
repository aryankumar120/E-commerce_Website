// Swiper Js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 1000,
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// Animations
ScrollReveal().reveal(".top_nav",{
  origin: "bottom",
  distance:'20px',
  opacity: 0,
});
ScrollReveal().reveal(".nav",{
  origin: "bottom",
  distance:'20px',
  opacity: 0,
});
ScrollReveal().reveal(".header",{
  origin: "bottom",
  distance:'20px',
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section",{
  origin: "bottom",
  distance:'20px',
  opacity: 0,
  duration: 900,
  delay: 100,
});
ScrollReveal().reveal(".footer",{
  origin: "bottom",
  distance:'20px',
  opacity: 0,
  duration: 900,
  delay: 100,
});


// Mobile Nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mob_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mob_hidden");
});

// Cart Menu- Add to cart
const AddCart = document.querySelectorAll(".add_cart");

AddCart.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    const  price= button.getAttribute("data-price");

    const cartItem = {id,title,image,price};
    const cart = JSON.parse(localStorage.getItem('cart'))|| [];
    cart.push(cartItem);
    localStorage.setItem("cart",JSON.stringify(cart));
  });
});
