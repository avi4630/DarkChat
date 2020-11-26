module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
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
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      display_name: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    },
    {
      timestamp: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  Users.associate = (models) => {
    Users.hasMany(models.messages, {
      foreignKey: "receiver",
    });
    Users.hasMany(models.messages, {
      foreignKey: "sender",
    });
    Users.hasMany(models.friends, {
      foreignKey: "user",
    });
    Users.hasMany(models.friends, {
      foreignKey: "friend",
    });
  };
  return Users;
};
