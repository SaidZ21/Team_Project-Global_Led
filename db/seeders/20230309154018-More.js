'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Mores', [{
       text: 'Такого вы никогда не испытывали. И даже без бонга',
       serviceId: 1,
       createdAt: new Date(),
          updatedAt: new Date()
     },
     {
      text: 'Все, что было в Тайланде - остаётся в Тайланде...',
      serviceId: 2,
      createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      text: 'Гарантия от производителя: вы точно будете главной звездой на любой сельской дискотеке',
      serviceId: 3,
      createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      text: 'Дополенительный бонус: +100500 к защите от тёщи',
      serviceId: 4,
      createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      text: 'ХАХАХААХАХАХАХАХААХАХ, СЕРЬЕЗНО?',
      serviceId: 5,
      createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      text: 'Жадный стоит неделю на Верхнем Ларсе, умный работает с нами',
      serviceId: 6,
      createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      text: 'Место для вашей рекламы. Пора оплачивать',
      serviceId: 7,
      createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      text: 'Место для вашей рекламы. Пора оплачивать',
      serviceId: 8,
      createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      text: 'Место для вашей рекламы. Пора оплачивать',
      serviceId: 9,
      createdAt: new Date(),
          updatedAt: new Date()
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Mores', null, {});
     
  }};
