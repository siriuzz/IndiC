'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Secciones', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      id_horario: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_asignatura: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_docente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      aula: {
        type: Sequelize.STRING,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      calificacion_base_mt: {
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
    }, { freezeTableName: true });
    await queryInterface.addConstraint('Secciones', {
      fields: ['id_asignatura'],
      type: 'foreign key',
      name: 'fk_seccion_asignatura',
      references: {
        table: 'Asignaturas',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Secciones', {
      fields: ['id_horario'],
      type: 'foreign key',
      name: 'fk_seccion_horario',
      references: {
        table: 'Horarios',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Secciones', {
      fields: ['id_docente'],
      type: 'foreign key',
      name: 'fk_seccion_profesor',
      references: {
        table: 'Docentes',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Secciones');
  }
};