/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      username: 'Timur',
      email: 'Tima@mail.ru',
      password: '$2b$10$gC87D.7JwQA6cwhpyuYaLOz29fyjTvlxdKkTOZWqAjdco/50TTBlm',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Maxim',
      email: 'Max@ya.ru',
      password: '$2b$10$gdCvhF999euj2Co6iSbA/uhM7WPLKNhJ5/dvTjWXwD8SgqhLOtM5.',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
