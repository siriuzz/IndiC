'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estudiante_Asignaturas', {
      id_estudiante: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_asignatura: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // await queryInterface.addConstraint('Estudiante_Asignaturas', {
    //   fields: ['id_estudiante'],
    //   type: 'foreign key',
    //   name: 'fk_estudiante',
    //   references: {
    //     table: 'Estudiantes',
    //     field: 'id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // });
    // await queryInterface.addConstraint('Estudiante_Asignaturas', {
    //   fields: ['id_asignatura'],
    //   type: 'foreign key',
    //   name: 'fk_asignatura',
    //   references: {
    //     table: 'Asignaturas',
    //     field: 'id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Estudiante_Asignaturas');
  }
};