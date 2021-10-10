'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Movies, {
        foreignKey: 'movieId'
      });
      this.belongsTo(models.Clients, {
        foreignKey: 'clientId'
      })
    }
  };
  Tickets.init({
    clientId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};