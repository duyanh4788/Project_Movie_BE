'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Tickets, {
        foreignKey: 'movieId'
      })
    }
  };
  Movies.init({
    nameMovie: DataTypes.STRING,
    trailler: DataTypes.STRING,
    images: DataTypes.STRING,
    description: DataTypes.TEXT,
    schedule: DataTypes.DATE,
    pointReview: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};