const menuBtn = document.querySelector(".nav-under__btn");
const menuClose = document.querySelector(".btn-close");
const menuList = document.querySelector(".under-links");

menuBtn.addEventListener("click", () => {
      menuList.classList.add("show-btn__menu");
});

menuClose.addEventListener("click", () => {
      menuList.classList.remove("show-btn__menu");
});

let swiper = new Swiper(".swiper-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
      },
      navigation: {
            nextEl: ".navigation-arrow__next",
            prevEl: ".navigation-arrow__back",
      },
      breakpoints: {
            600: {
                  slidesPerView: 1.4,
                  spaceBetween: 20,
            },
            1470: {
                  slidesPerView: 2.7,
                  spaceBetween: 20,
            },
            1660: {
                  slidesPerView: 3.7,
                  spaceBetween: 20,
            },
      },
});

initMap();

async function initMap() {
      await ymaps3.ready;
      const { YMap, YMapDefaultSchemeLayer } = ymaps3;
      const map = new YMap(document.getElementById("map"), {
            location: {
                  center: [54.54256107012005, 36.31914749999998],
                  zoom: 17,
            },
      });
}
map.addChild(new YMapDefaultSchemeLayer());

map.controls.remove("geolocationControl");
map.controls.remove("searchControl");
map.controls.remove("trafficControl");
map.controls.remove("typeSelector");
map.controls.remove("fullscreenControl");
map.controls.remove("zoomControl");
map.controls.remove("rulerControl");
