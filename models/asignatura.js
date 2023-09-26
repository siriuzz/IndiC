'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Asignatura.init({
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true
    },
    nombre: { type: DataTypes.STRING, allowNull: false },
    codigo: { type: DataTypes.INTEGER, allowNull: false },
    creditos: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Asignatura',
  });
  return Asignatura;
};