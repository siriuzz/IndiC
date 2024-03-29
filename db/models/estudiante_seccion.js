'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudiante_Seccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Estudiante_Seccion.belongsTo(models.Estudiante, {
        foreignKey: {
          name: 'id_estudiante',
          allowNull: false
        }
      })
      Estudiante_Seccion.belongsTo(models.Secciones, {
        as: 'Secciones',
        foreignKey: {
          name: 'id_seccion',
          allowNull: false
        },
      })
    }
  }
  Estudiante_Seccion.init({
    id_estudiante: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    id_seccion: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    calificacion_mt: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    calificacion_final: { type: DataTypes.INTEGER, allowNull: false },
    periodo_year: { type: DataTypes.INTEGER, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    periodo_estudiante: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'Estudiante_Seccion',
    freezeTableName: true,
  });
  // sequelize.sync();
  return Estudiante_Seccion;
};