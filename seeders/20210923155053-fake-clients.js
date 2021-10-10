'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const clientList = [...Array(8)].map((_, index) => {
      return {
        id: index + 1,
        account: `duyanhdepTrai${index}`,
        userName: `Nguyen Van ${index}`,
        email: `duyanh0${index}@gmail.com`,
        phone: 1233215,
        passWord: "$2a$10$DCPERjyGU.Y2.JgKnTocwuvBHSdfAzulPyV6QmyWyZt9bhuiTrLaa",
        userTypeCode: "SUPER_ADMIN",
        avatar: "http://localhost:7000/public/images/1632027190374_Interview-React-2.jpeg",
        createdAt: "2021-09-09 09:00:00",
        updatedAt: "2021-09-09 09:00:00"
      }
    })
    return queryInterface.bulkInsert('Clients', clientList)
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients", null, {})
  }
};
