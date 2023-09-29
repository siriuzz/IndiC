'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Horario.belongsTo(models.Seccion, {
        foreignKey: {
          name: 'id_seccion',
          allowNull: false
        }
      })
    }
  }
  Horario.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    id_seccion: { type: DataTypes.INTEGER, allowNull: false },
    dia: { type: DataTypes.INTEGER, allowNull: false },
    hora_inicio: { type: DataTypes.INTEGER, allowNull: false },
    hora_fin: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Horario',
  });
  return Horario;
};