'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Docente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Docente.hasMany(models.Asignatura);
      Docente.belongsTo(models.Estado, {
        foreignKey: {
          name: 'id_estado',
          allowNull: false
        }
      })
      Docente.belongsTo(models.Rol, {
        foreignKey: {
          name: 'id_rol',
          allowNull: false
        }
      })

    }
  }
  Docente.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    nombre_docente: { type: DataTypes.STRING, allowNull: false },
    correo_docente: { type: DataTypes.STRING, allowNull: false },
    telefono_docente: { type: DataTypes.INTEGER, allowNull: false },
    cedula_docente: { type: DataTypes.INTEGER, allowNull: false },
    password_docente: { type: DataTypes.STRING, allowNull: false },
    fecha_registro: { type: DataTypes.DATE, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: false },
    id_estado: { type: DataTypes.INTEGER, allowNull: false },
    id_rol: { type: DataTypes.INTEGER, allowNull: false },
    configuracion: { type: DataTypes.JSON, allowNull: false }
  }, {
    sequelize,
    modelName: 'Docente',
  });
  return Docente;
};