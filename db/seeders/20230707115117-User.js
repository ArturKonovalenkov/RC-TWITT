"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        login: "Madara",
        email: "Uchiha@mail.ru",
        password:
          "$2b$10$.pkdkrjCNyJi3WS6MWpip.gfcZUIJTbRC/VwDd2xEkvd0y3nlTegm",
        status: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: "Sasuke",
        email: "Uchiha",
        password:
          "$2b$10$1EOiTG9t2C1.axyCy6zRMOcM8pk4ceW45Qw/xkoKM3DZ3G8gv7QxO",
        status: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: "Sakura",
        email: "Harenada",
        password: "sakura",
        status: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: "Kakashi",
        email: "Hataki",
        password: "kakashi",
        status: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
