'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estudiante_Seccion', {
      id_estudiante: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_seccion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      calificacion_mt: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      calificacion_final: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      periodo: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.addConstraint('Estudiante_Seccion', {
      fields: ['id_seccion'],
      type: 'foreign key',
      name: 'fk_seccion',
      references: {
        table: 'Secciones',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Estudiante_Seccion', {
      fields: ['id_estudiante'],
      type: 'foreign key',
      name: 'fk_estudiante',
      references: {
        table: 'Estudiantes',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Estudiante_Seccion');
  }
};