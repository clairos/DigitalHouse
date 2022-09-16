'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      title: {
        type: Sequelize.DataTypes.STRING
      },
      pages: {
        type: Sequelize.DataTypes.INTEGER
      },
      author: {
        type: Sequelize.DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Livros');
  }
};