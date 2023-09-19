'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.hasMany(models.Docente);
      Roles.hasMany(models.Estudiante);
    }
  }
  Roles.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    rol: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};