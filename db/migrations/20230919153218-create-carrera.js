'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carreras', {
      id: {
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carrera: {
        allowNull: false,
        type: Sequelize.STRING
      },
      periodos_totales: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      asignaturas_totales: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carreras');
  }
};