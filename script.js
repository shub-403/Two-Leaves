window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  const navParent = document.querySelector(".navbar-parent");
  const headerTop = document.querySelector(".header-top");

  if (window.scrollY > 100) {
    headerTop.classList.remove("py-1.5");
    nav.classList.add("sticky", "top-0", "left-0");
    headerTop.classList.add("transparent", "h-0", "py-0");
    nav.classList.remove("rounded-xl");
    navParent.classList.add("navbar-parent-padding");
  } else {
    headerTop.classList.add("py-1.5");
    headerTop.classList.remove("transparent", "h-0", "py-0");
    nav.classList.remove("sticky", "top-0");
    headerTop.classList.remove("fixed");
    navParent.classList.remove("navbar-parent-padding");
    nav.classList.add("rounded-xl");
    navParent.classList.add("p-[15px]");
  }
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5.4,
  spaceBetween: 20,
  slidesPerGroup: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2.5,
    },

    1024: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 3.5,
    },
    1400: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 4.5,
    },
    1800: {
      slidesPerView: 5.5,
    },
  },
});

let typed = new Typed(".auto-type", {
  strings: ["green tea", "black tea", "chai tea", "iced tea", "herbal tea"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// gsap.to("#Origins .animate-text",{
//   transform:"translateY(-50%)",
//   scrollTrigger:{
//     trigger:"#Origins",
//     scroller:"body",
//     markers:true,
//     start:"top 0%",
//     end:"top 100%",
//     scrub:3,
//     pin:true,
//   }
// });

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animate-text").forEach((elem) => {
  gsap.fromTo(
    elem,
    { y: 150 },
    {
      y: -50,

      scrollTrigger: {
        trigger: elem,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    },
  );
});

gsap.to(".origin-bg", {
  y: -100,

  scrollTrigger: {
    trigger: "#Origins",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
});