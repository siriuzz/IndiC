'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudiante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estudiante.hasMany(models.Estudiante_Asignatura);
      Estudiante.belongsTo(models.Estado, {
        foreignKey: {
          name: 'id_estado',
          allowNull: false
        }
      })
      Estudiante.belongsTo(models.Roles, {
        foreignKey: {
          name: 'id_rol',
          allowNull: false
        }
      })
      Estudiante.belongsTo(models.Carrera, {
        foreignKey: {
          name: 'id_carrera',
          allowNull: false
        }
      })
    }
  }
  Estudiante.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    nombre_estudiante: { type: DataTypes.STRING, allowNull: false },
    correo_estudiante: { type: DataTypes.STRING, allowNull: false },
    telefono_estudiante: { type: DataTypes.STRING, allowNull: false },
    cedula_estudiante: { type: DataTypes.INTEGER, allowNull: false },
    password_estudiante: {
      type: DataTypes.STRING,
      // set(value) {
      //   this.setDataValue('password_estudiante', bcrypt.hashSync(value, 10));
      // },
      allowNull: false
    },
    fecha_registro: { type: DataTypes.DATE, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: false },
    id_carrera: { type: DataTypes.INTEGER, allowNull: false },
    id_estado: { type: DataTypes.INTEGER, allowNull: false },
    id_rol: { type: DataTypes.INTEGER, allowNull: false },
    periodos_cursados: { type: DataTypes.INTEGER, allowNull: false },
    configuracion: { type: DataTypes.JSON, allowNull: false }
  }, {
    sequelize,
    modelName: 'Estudiante',
  });
  return Estudiante;
};