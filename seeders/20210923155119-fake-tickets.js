'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ticketList = [...Array(8)].map((_, index) => {
      return {
        clientId: 1,
        movieId: index + 1,
        createdAt: "2021-09-09 09:00:00",
        updatedAt: "2021-09-09 09:00:00",
      }
    })
    return queryInterface.bulkInsert("Tickets", ticketList)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tickets", null, {})
  }
};
