/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Services",
      [
        {
          name: "Классная услуга номер 1",
          url: "https://www.mirf.ru/wp-content/uploads/2019/07/zastavka.jpg.jpg",
          text: "Краткое описание 1",
          info: "Место для вашей рекламы 1",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Классная услуга номер 2",
          url: "https://spa-arte.ru/uploads/4a2ab605c353180430739d4160b83543.jpg",
          text: "Краткое описание 2",
          info: "Место для вашей рекламы 2",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Классная услуга номер 3",
          url: "https://img.redbull.com/images/c_crop,x_406,y_0,h_1800,w_1350/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2019/12/11/flzov1wiel8a8gj5x6rq/b-boy-killa-kolya",
          text: "Краткое описание 3",
          info: "Место для вашей рекламы 3",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Классная услуга номер 4",
          url: "https://7strel.ru/_mod_files/ce_images/pic1.jpg",
          text: "Краткое описание 4",
          info: "Место для вашей рекламы 4",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Классная услуга номер 5",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BA%D0%B0%D1%80%D1%82%D0%B0%D0%BC_%D1%82%D0%B0%D1%80%D0%BE_-_Tarot_cards_spread_for_reading.jpg",
          text: "Краткое описание 5",
          info: "Место для вашей рекламы 5",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Классная услуга номер 6",
          url: "https://cdnn1.img.sputnik-georgia.com/img/07e6/03/1d/265584557_117:0:1184:800_1920x0_80_0_0_526c48d2203f2d9f84a19e0d387dfc32.jpg",
          text: "Краткое описание 6",
          info: "Место для вашей рекламы 6",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Классная услуга номер 7",
          url: "https://static1-repo.aif.ru/1/82/1012526/bd84bead3366debb4086f8a8d5955c5f.jpg",
          text: "Краткое описание 7",
          info: "Место для вашей рекламы 7",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Классная услуга номер 8",
          url: "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRppTII6xR2U1NrMRsJsYGQw",
          text: "Краткое описание 8",
          info: "Место для вашей рекламы 8",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Классная услуга номер 9",
          url: "https://www.meme-arsenal.com/memes/ad5f4876c5e3494f838f332301b4a98d.jpg",
          text: "Краткое описание 9",
          info: "Место для вашей рекламы 9",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Services", null, {});
  },
};
