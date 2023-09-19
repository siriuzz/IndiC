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
      Asignatura.belongsTo(models.Docente, {
        foreignKey: {
          name: 'id_docente',
          allowNull: false,
        }
      })
      Asignatura.hasMany(models.Estudiante_Asignatura)
    }
  }
  Asignatura.init({
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true
    },
    asignatura: { type: DataTypes.STRING, allowNull: false },
    id_docente: { type: DataTypes.INTEGER, allowNull: false },
    creditos: { type: DataTypes.INTEGER, allowNull: false },
    aula: { type: DataTypes.STRING, allowNull: false },
    activa: { type: DataTypes.BOOLEAN, allowNull: false },
    calificacion_base_mt: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Asignatura',
  });
  return Asignatura;
};