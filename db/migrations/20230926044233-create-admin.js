'use strict';
const { sequelize } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cedula: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false
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
      id_estado: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_rol: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      configuracion: {
        type: Sequelize.JSON,
        allowNull: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Admins', {
      fields: ['id_estado'],
      type: 'foreign key',
      name: 'fk_admin_estado',
      references: {
        table: 'Estados',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Admins', {
      fields: ['id_rol'],
      type: 'foreign key',
      name: 'fk_admin_rol',
      references: {
        table: 'Roles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    sequelize.sync({ force: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Admins');
  }
};