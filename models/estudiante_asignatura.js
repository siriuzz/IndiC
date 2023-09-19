'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudiante_Asignatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Estudiante_Asignatura.belongsTo(models.Estudiante, {
        foreignKey: {
          name: 'id_estudiante',
          allowNull: false
        }
      })
      Estudiante_Asignatura.belongsTo(models.Asignatura, {
        foreignKey: {
          name: 'id_asignatura',
          allowNull: false
        }
      })
    }
  }
  Estudiante_Asignatura.init({
    id_estudiante: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    id_asignatura: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    calificacion_mt: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 40 },
    calificacion_final: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'Estudiante_Asignatura',
  });
  return Estudiante_Asignatura;
};