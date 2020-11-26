module.exports = (sequelize, Sequelize) => {
  const Friends = sequelize.define(
    "friends",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      friend: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamp: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  Friends.associate = (models) => {
    Friends.belongsTo(models.users, {
      foreignKey: "user",
    });
    Friends.belongsTo(models.users, {
      foreignKey: "friend",
    });
  };

  return Friends;
};
