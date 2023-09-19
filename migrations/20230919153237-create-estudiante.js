'use strict';
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
      nombre_estudiante: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correo_estudiante: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefono_estudiante: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cedula_estudiante: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      password_estudiante: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_registro: {
        type: Sequelize.DATE,
        allowNull: false
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
        allowNull: false
      },
      id_rol: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      periodos_cursados: {
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
    await queryInterface.addConstraint('Estudiantes', {
      fields: ['id_carrera'],
      type: 'foreign key',
      name: 'fk_id_carrera',
      references: {
        table: 'Carreras',
        field: 'id'
      }
    });
    await queryInterface.addConstraint('Estudiantes', {
      fields: ['id_estado'],
      type: 'foreign key',
      name: 'fk_id_estado',
      references: {
        table: 'Estados',
        field: 'id'
      }
    });
    await queryInterface.addConstraint('Estudiantes', {
      fields: ['id_rol'],
      type: 'foreign key',
      name: 'fk_id_rol',
      references: {
        table: 'Roles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Estudiantes');
  }
};