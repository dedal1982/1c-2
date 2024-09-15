const swiperOne = new Swiper(".stories-1c__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
