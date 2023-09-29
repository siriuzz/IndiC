'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estudiantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cedula: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_registro: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_carrera: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      id_rol: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      periodos_cursados: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      configuracion: {
        allowNull: false,
        type: Sequelize.JSON,
        defaultValue: {}
      },
      indice_general: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
    await queryInterface.addConstraint('Estudiantes', {
      fields: ['id_carrera'],
      type: 'foreign key',
      name: 'fk_estudiante_carrera',
      references: {
        table: 'Carreras',
        field: 'id'
      }
    });
    await queryInterface.addConstraint('Estudiantes', {
      fields: ['id_estado'],
      type: 'foreign key',
      name: 'fk_estudiante_estado',
      references: {
        table: 'Estados',
        field: 'id'
      }
    });
    await queryInterface.addConstraint('Estudiantes', {
      fields: ['id_rol'],
      type: 'foreign key',
      name: 'fk_estudiante_rol',
      references: {
        table: 'Roles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    sequelize.sync();
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Estudiantes');
  }

};