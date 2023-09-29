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
      Docente.belongsTo(models.Estado, {
        foreignKey: {
          name: 'id_estado',
          allowNull: false
        }
      })
      Docente.belongsTo(models.Roles, {
        foreignKey: {
          name: 'id_rol',
          allowNull: false
        }
      })
      Docente.hasMany(models.Secciones, {
        foreignKey: {
          name: 'id_docente',
          allowNull: false
        }
      })

    }
  }
  Docente.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false },
    telefono: { type: DataTypes.STRING, allowNull: false },
    cedula: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    salt: { type: DataTypes.STRING, allowNull: false },
    fecha_registro: { type: DataTypes.DATE, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: false },
    id_estado: { type: DataTypes.INTEGER, allowNull: false },
    id_rol: { type: DataTypes.INTEGER, allowNull: false },
    configuracion: { type: DataTypes.JSON, allowNull: false }
  }, {
    sequelize,
    timestamps: true,
    createdAt: false,
    modelName: 'Docente',
  });
  return Docente;
};