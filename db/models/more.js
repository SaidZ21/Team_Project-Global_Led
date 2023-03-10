'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class More extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
    }
  }
  More.init({
    text: DataTypes.STRING,
    serviceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'More',
  });
  return More;
};