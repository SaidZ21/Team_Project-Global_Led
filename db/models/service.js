'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
    //  this.hasOne(More, {foreignKey: 'service_id'});
    }
  }
  Service.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    text: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};