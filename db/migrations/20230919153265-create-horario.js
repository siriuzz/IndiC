'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Horarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      id_seccion: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hora_inicio: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hora_fin: {
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
    await queryInterface.addConstraint('Horarios', {
      fields: ['id_seccion'],
      type: 'foreign key',
      name: 'fk_horario_seccion',
      references: {
        table: 'Secciones',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Horarios');
  }
};