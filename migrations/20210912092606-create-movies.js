'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameMovie: {
        allowNull: false,
        type: Sequelize.STRING
      },
      trailler: {
         allowNull: false,
        type: Sequelize.STRING
      },
      images: {
         allowNull: false,
        type: Sequelize.STRING
      },
      description: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      schedule: {
         allowNull: false,
        type: Sequelize.DATE
      },
      pointReview: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  }
};