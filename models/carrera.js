'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carrera.hasMany(models.Estudiante, {
        foreignKey: {
          name: 'id_carrera',
          allowNull: false
        }
      });

    }
  }
  Carrera.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    carrera: { type: DataTypes.STRING, allowNull: false },
    periodos_totales: { type: DataTypes.INTEGER, allowNull: false },
    asignaturas_totales: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Carrera',
  });
  return Carrera;
};