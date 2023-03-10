/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Services',
      [
        {
          name: 'Полёт на луну',
          url: 'https://www.mirf.ru/wp-content/uploads/2019/07/zastavka.jpg.jpg',
          text: 'Приятные ощущения, потрясающие виды...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Тайский массаж',
          url: 'https://spa-arte.ru/uploads/4a2ab605c353180430739d4160b83543.jpg',
          text: 'Лучшие мастера из Тайланда. Никакого подвоха...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мастер-класс по брейк дансу',
          url: 'https://img.redbull.com/images/c_crop,x_406,y_0,h_1800,w_1350/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2019/12/11/flzov1wiel8a8gj5x6rq/b-boy-killa-kolya',
          text: 'Ну и что, что тебе за 40? Живи здесь и сейчас...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Урок стрельбы из арбалета',
          url: 'https://7strel.ru/_mod_files/ce_images/pic1.jpg',
          text: 'В холодильнике хоть шаром покати?! За окном много кошек...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Расклад карт Таро',
          url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BA%D0%B0%D1%80%D1%82%D0%B0%D0%BC_%D1%82%D0%B0%D1%80%D0%BE_-_Tarot_cards_spread_for_reading.jpg',
          text: 'Ха-ха, когда Вам уже не помочь...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Займём место в очереди на границе',
          url: 'https://cdnn1.img.sputnik-georgia.com/img/07e6/03/1d/265584557_117:0:1184:800_1920x0_80_0_0_526c48d2203f2d9f84a19e0d387dfc32.jpg',
          text: 'Вы богаты и цените своё время? Нам есть, что предложить Вам...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Классная услуга номер 1',
          url: 'https://static1-repo.aif.ru/1/82/1012526/bd84bead3366debb4086f8a8d5955c5f.jpg',
          text: 'Место для вашей рекламы...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Классная услуга номер 2',
          url: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRppTII6xR2U1NrMRsJsYGQw',
          text: 'Место для вашей рекламы...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Классная услуга номер 3',
          url: 'https://www.meme-arsenal.com/memes/ad5f4876c5e3494f838f332301b4a98d.jpg',
          text: 'Место для вашей рекламы...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  },
};
