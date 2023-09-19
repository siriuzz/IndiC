'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config_Calif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Config_Calif.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    estado: { ype: DataTypes.BOOLEAN, allowNull: false },
  }, {
    sequelize,
    modelName: 'Config_Calif',
  });
  return Config_Calif;
};