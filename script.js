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

initMap();

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById("map"),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [54.5293, 36.2754],

        // Уровень масштабирования
        zoom: 8,
      },
    }
  );
  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}

map.controls.remove("geolocationControl"); // удаляем геолокацию
map.controls.remove("searchControl"); // удаляем поиск
map.controls.remove("trafficControl"); // удаляем контроль трафика
map.controls.remove("typeSelector"); // удаляем тип
map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove("zoomControl"); // удаляем контрол зуммирования
map.controls.remove("rulerControl"); // удаляем контрол правил
// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
