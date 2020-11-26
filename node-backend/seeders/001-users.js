"use strict";

module.exports = {
  up: async (queryInterface) => {
    const usersCount = await queryInterface.sequelize.query(
      "SELECT count(*) from users;"
    );
    if (usersCount[0][0].count > 0) {
      return usersCount;
    } else {
      return queryInterface.bulkInsert("users", [
        {
          name: "avinash",
          email: "avimanepatil@gmail.com",
        },
        {
          name: "pratiksha",
          email: "pratikshapatilav@gmail.com",
        },
      ]);
    }
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("users", null);
  },
};
