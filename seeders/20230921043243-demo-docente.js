'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Docentes', [{
      nombre: 'Juana Doe',
      correo: 'juana@email.com',
      telefono: '1234567890',
      cedula: '1234567890',
      password: '1234567890',
      fecha_registro: '2021-09-19',
      direccion: 'Calle 123',
      id_estado: 1,
      id_rol: 1,
      configuracion: JSON.stringify({ "config": "config" }),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Docentes', null, {});
  }
};
