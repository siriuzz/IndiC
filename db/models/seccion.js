'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seccion.hasOne(models.Horario, {
        foreignKey: {
          name: 'id_seccion',
          allowNull: false
        }
      })
      Seccion.hasMany(models.Estudiante_Seccion);
      Seccion.belongsTo(models.Docente, {
        foreignKey: {
          name: 'id_docente',
          allowNull: false
        }
      })

    }
  }
  Seccion.init({
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true },
    id_asignatura: { type: DataTypes.INTEGER, allowNull: false },
    numero: { type: DataTypes.INTEGER, allowNull: false },
    id_profesor: { type: DataTypes.INTEGER, allowNull: false },
    periodo: { type: DataTypes.INTEGER, allowNull: false },
    year: { type: DataTypes.DATE, allowNull: false },
    aula: { type: DataTypes.STRING, allowNull: false },
    is_active: { type: DataTypes.BOOLEAN, allowNull: false },
    calificacion_base_mt: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'Seccion',
  });
  return Seccion;
};