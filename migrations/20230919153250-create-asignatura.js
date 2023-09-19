'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Asignaturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      asignatura: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_docente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      creditos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      aula: {
        type: Sequelize.STRING,
        allowNull: false
      },
      activa: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      calificacion_base_mt: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Asignaturas', {
      fields: ['id_docente'],
      type: 'foreign key',
      name: 'fk_asignatura_docente',
      references: {
        table: 'Docentes',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Asignaturas');
  }
};