"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          userId: "user001",
          name: "John Doe",
          email: "johndoe@example.com",
          comment: "This is a comment for John.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "user002",
          name: "Jane Smith",
          email: "janesmith@example.com",
          comment: "This is a comment for Jane.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "user003",
          name: "Sam Wilson",
          email: "samwilson@example.com",
          comment: "This is a comment for Sam.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
