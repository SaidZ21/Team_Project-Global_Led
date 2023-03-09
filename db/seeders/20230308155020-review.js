'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Megan_Fox_%2851914406561%29_%28cropped%29.jpg/220px-Megan_Fox_%2851914406561%29_%28cropped%29.jpg',
          name: 'Меган Фокс',
          title: "Спасибо за фары🔥 Светят шикарно) Ребята работают быстро (утром привезли и вечером забрали) и качественно! Удачи вам", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/George_Clooney_2016.jpg/220px-George_Clooney_2016.jpg",
          name: 'Джордж Клуни',
          title: "Ну на конец то,эта та машина о которой я думаю?супер👍", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adam_Sandler_Cannes_2017.jpg/220px-Adam_Sandler_Cannes_2017.jpg",
          name: 'Адам Сендлер',
          title: "Спасибо вам большое пацаны за проделанную работу. Фары как новые и свет отличный🤘✌👍. Процветания вам и ещё больше клиентов🙏👍🤘", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Richard_Gere%2C_December_2017.jpg/220px-Richard_Gere%2C_December_2017.jpg",
          name: 'Ричард Гир',
          title: "Огромное спасибо за проделанную работу 😌 Свет просто шикарный и стоит своих денег😉", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Konstantin_Khabensky_%E2%80%94_2018_%28cropped%29.jpg/274px-Konstantin_Khabensky_%E2%80%94_2018_%28cropped%29.jpg",
          name: 'Константин Хабенский',
          title: "Все прошло круто всем советую Качественно быстро", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/274px-Harrison_Ford_by_Gage_Skidmore_3.jpg",
          name: 'Харрисон Форд',
          title: "Спасибо🤝 Свет шикарный. Теперь вижу все ямы на бетонке:)", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jon_Jones_in_2014_%28cropped%29.jpg/260px-Jon_Jones_in_2014_%28cropped%29.jpg",
          name: 'Джон Джонс',
          title: "Было бы круто ещё показывать как светили ДО, а как стали ПОСЛЕ 💪   ", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Jean-Claude_Van_Damme_2012.jpg/220px-Jean-Claude_Van_Damme_2012.jpg",
          name: 'Жан-Клод Ван Дамм',
          title: "Большое спасибо парням за терпение и проделанную работу)) успехов вам и процветания)) P. S. Колдуйте каждый сам с дизайном, а не повторяйте, будьте не такие как все!", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jackie_Chan_July_2016.jpg/274px-Jackie_Chan_July_2016.jpg",
          name: 'Джеки Чан',
          title: "Спасииибо Вам большое. Второй день езжу кайфую от света. Вы большие молодцы, и мастера своего дела👍 поставили модули, отполировали, и затянули фары пленкой. Процветания, и удачи Вам мужики👍 ещё раз спасибо🤝", //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Reviews', null, {});
     
  }
};
