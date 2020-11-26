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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      friend_id: {
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
      foreignKey: "friend_id",
      as:"user_friends",
    });
    Friends.belongsTo(models.users, {
      foreignKey: "user_id",
      as: "self"
    });
  };

  return Friends;
};
