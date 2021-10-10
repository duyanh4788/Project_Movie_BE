'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const movieList = [...Array(8)].map((_, index) => {
      return {
        id: index + 1,
        nameMovie: `Phim Cô Giao Na ${index}`,
        trailler: "https://www.youtube.com/embed/S3AVcCggRnU",
        images: "http://images/001.jpg",
        description: `Phim Quá Hay , Nên Xem Phim Cô Giao Na ${index}`,
        schedule: "2021-10-09 23:21:00",
        pointReview: 8,
        createdAt: "2021-09-09 09:00:00",
        updatedAt: "2021-09-09 09:00:00"
      }
    })
    return queryInterface.bulkInsert("Movies", movieList);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movies", null, {})
  }
};
