let swiper = new Swiper(".swiper-slider", {
      slidesPerView: 3.6,
      spaceBetween: 20,
      pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
      },
      navigation: {
            nextEl: ".navigation-arrow__next",
            prevEl: ".navigation-arrow__back",
      },
      // breakpoints: {
      //   1470: {
      //     slidesPerView: 2,
      //     spaceBetween: 10,
      //   },
      //   1024: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //   },
      // },
});

let center = [48.8866527839977, 2.34310679732974];

function init() {
      let map = new ymaps.Map("map-test", {
            center: center,
            zoom: 17,
      });

      let placemark = new ymaps.Placemark(
            center,
            {},
            {
                  iconLayout: "default#image",
                  iconImageHref: "../img/svg/maper.svg",
                  iconImageSize: [41, 77],
                  iconImageOffset: [-19, -44],
            }
      );

      map.controls.remove("geolocationControl"); // удаляем геолокацию
      map.controls.remove("searchControl"); // удаляем поиск
      map.controls.remove("trafficControl"); // удаляем контроль трафика
      map.controls.remove("typeSelector"); // удаляем тип
      map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove("zoomControl"); // удаляем контрол зуммирования
      map.controls.remove("rulerControl"); // удаляем контрол правил
      // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      map.geoObjects.add(placemark);
}

ymaps.ready(init);
