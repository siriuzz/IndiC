'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Docentes', {
      id: {
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_docente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correo_docente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefono_docente: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cedula_docente: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      password_docente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fecha_registro: {
        allowNull: false,
        type: Sequelize.DATE
      },
      direccion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_estado: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_rol: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      configuracion: {
        allowNull: false,
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()

      }
    });
    await queryInterface.addConstraint('Docentes', {
      fields: ['id_estado'],
      type: 'foreign key',
      name: 'fk_docente_estado',
      references: {
        table: 'Estados',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Docentes', {
      fields: ['id_rol'],
      type: 'foreign key',
      name: 'fk_docente_rol',
      references: {
        table: 'Roles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Docentes');
  }
};