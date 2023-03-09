import React, { useEffect } from 'react';

export default function Karta() {
  useEffect(() => {
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.934954, 37.287370],
        zoom: 10,
        controls: ['routePanelControl', 'zoomControl', 'smallMapDefaultSet'],
      }, {
        searchControlProvider: 'yandex#search',
      });

      // Создание макета содержимого хинта.
      // Макет создается через фабрику макетов с помощью текстового шаблона.
      const HintLayout = ymaps.templateLayoutFactory.createClass("<div class='my-hint'>"
              + '<b>{{ properties.object }}</b><br />'
              + '{{ properties.address }}'
              + '</div>', {
        // Определяем метод getShape, который
        // будет возвращать размеры макета хинта.
        // Это необходимо для того, чтобы хинт автоматически
        // сдвигал позицию при выходе за пределы карты.
        getShape() {
          const el = this.getElement();
          let result = null;
          if (el) {
            const { firstChild } = el;
            result = new ymaps.shape.Rectangle(
              new ymaps.geometry.pixel.Rectangle([
                [0, 0],
                [firstChild.offsetWidth, firstChild.offsetHeight],
              ]),
            );
          }
          return result;
        },
      });

      const myPlacemark = new ymaps.Placemark([55.934954, 37.287370], {
        address: 'Москва, ул. Голиково 55',
        object: 'Global LED',
        // iconColor: "#ff0000", // цвет метки
        // preset: "islands#redIcon", // иконка метки
        // iconSize: [30, 40], // размер иконки метки
        // iconImageSize: [32, 32],
      }, {
        hintLayout: HintLayout,
      });

      myMap.geoObjects.add(myPlacemark);

      const control = myMap.controls.get('routePanelControl');
      // Зададим состояние панели для построения машрутов.
      control.routePanel.state.set({
        // Тип маршрутизации.
        type: 'auto',
        // Выключим возможность задавать пункт отправления в поле ввода.
        fromEnabled: true,
        // Адрес или координаты пункта отправления.
        // from: true,
        // Включим возможность задавать пункт назначения в поле ввода.
        toEnabled: false,
        // Адрес или координаты пункта назначения.
        to: [55.934954, 37.287370],
      });

      // Зададим опции панели для построения машрутов.
      control.routePanel.options.set({
        // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
        allowSwitch: false,
        // Включим определение адреса по координатам клика.
        // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
        reverseGeocoding: true,
      });

      const controleZoom = myMap.controls.get('zoomControl').options.set({ size: 'large' });
    }
    ymaps.ready(init);
  }, []);
  return (
    <div id="map" style={{ width: '800px', height: '700px' }} />
  );
}
