/*eslint-disable*/
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estado.hasMany(models.Estudiante, {
        foreignKey: {
          name: 'id_estado',
          allowNull: false
        }
      });
      Estado.hasMany(models.Docente);
      Estado.hasMany(models.Admin);
    }
  }
  Estado.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Estado',
  });
  return Estado;
};