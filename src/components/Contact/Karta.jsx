import React, { useEffect } from 'react';

export default function Karta() {
  useEffect(() => {
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 9,
        controls: ['routePanelControl'],
      }, {
        searchControlProvider: 'yandex#search',

      });
      // Построим мультимаршрут.
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [
          ],
          params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: 'bicycle',
          },
        },
        {
          // Автоматически устанавливать границы карты так,
          // чтобы маршрут был виден целиком.
          boundsAutoApply: true,
        },
        {
          // Опция editorDrawOver запрещает ставить точки поверх объектов карты.
          // Это нужно для того, чтобы пользователи могли
          // создавать промежуточные точки.
          editorDrawOver: true,
          // Опция editorMidPointsType задает тип промежуточных точек,
          // которые будут создаваться на маршруте.
          // "via" - будут создаваться транзитные точки;
          // "way" - путевые точки.
          editorMidPointsType: 'via',
        },
      );
      multiRoute.editor.start({
        // При включении опции addWayPoints пользователи смогут создавать
        // путевые точки по клику на карте.
        addWayPoints: true,
        // При включении опции removeWayPoints пользователи смогут удалять
        // путевые точки.
        // Для удаления точки нужно дважды кликнуть по ней.
        removeWayPoints: true,
        // При включении опции addMidPoints пользователи смогут создавать
        // новые промежуточные точки.
        // Чтобы создать промежуточную точку, нужно кликнуть по линии маршрута и,
        // удерживая кнопку, переместить точку в нужную позицию на карте.
        // Тип промежуточной точки (путевая или транзитная) задается в опции
        // editorMidPointsType
        addMidPoints: true,
      });
      // Отобразим мультимаршрут на карте.
      myMap.geoObjects.add(multiRoute);
      // Подпишемся на событие построения мультимаршрута.
      // Добавление маршрута на карту.
      myMap.geoObjects.add(multiRoute);

      control.routePanel.state.set({
        // Тип маршрутизации.
        type: 'masstransit',
        // Выключим возможность задавать пункт отправления в поле ввода.
        fromEnabled: false,
        // Адрес или координаты пункта отправления.
        from: 'Москва, Льва Толстого 16',
        // Включим возможность задавать пункт назначения в поле ввода.
        toEnabled: true,
        // Адрес или координаты пункта назначения.
        // to: 'Петербург'
      });
      const switchPointsButton = new ymaps.control.Button({
        data: { content: 'Поменять местами', title: 'Поменять точки местами' },
        options: { selectOnClick: false, maxWidth: 160 },
      });
      // Объявляем обработчик для кнопки.
      switchPointsButton.events.add('click', () => {
        // Меняет местами начальную и конечную точки маршрута.
        control.routePanel.switchPoints();
      });
      myMap.controls.add(switchPointsButton);

      // Метку можно перемещать.
    }

    ymaps.ready(init);
  }, []);
  return (
    <div id="map" style={{ width: '1000px', height: '800px' }} />
  );
}
