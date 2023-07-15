"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Posts", [
      {
        body: `Как-то на прилавке разговорились клубника, грецкий орех и банан.
        Клубника:
        - Меня все любят, потому что я похожа на сердечко!
  `,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: `И все-таки мат - это концентрация мысли и чувства!
        Ведь не скажешь "Светлана Анатольевна подобна той `,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: `- А что это за вой на болотах?
        - А это у Соловья-разбойника виллу в Италии отобрали`,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: `Как-то на прилавке разговорились клубника, грецкий орех и банан.
        Клубника:
 `,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: `Как-то на прилавке разговорились клубника, грецкий орех и банан.
        Клубника:
    `,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
