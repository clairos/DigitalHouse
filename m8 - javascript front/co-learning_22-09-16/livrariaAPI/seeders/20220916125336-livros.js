'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Livros', [
      {
        "title": "Diário de um banana",
        "pages": 214,
        "author": "Jeff Kinney"
      },
      {
        "title": "Código da Vinci",
        "pages": 250,
        "author": "Dan Brown"
      },
      {
        "title": "O diário de Anne Frank",
        "pages": 240,
        "author": "Anne Frank"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
