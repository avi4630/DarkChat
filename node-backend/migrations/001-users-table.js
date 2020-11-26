"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "users",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(50),
          length: 50,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(50),
          length: 50,
          allowNull: false,
        },
        display_name: {
          type: Sequelize.STRING(30),
          length: 30,
          allowNull: true,
        },
      },
      {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
      }
    );
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("users");
  },
};
