module.exports = (sequelize, Sequelize) => {
  const Messages = sequelize.define(
    "messages",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      sender_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      receiver_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      send_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      timestamp: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  Messages.associate = (models) => {
    Messages.belongsTo(models.users, {
      foreignKey: "receiver_id",
    });
    Messages.belongsTo(models.users, {
      foreignKey: "sender_id",
    });
  };

  return Messages;
};
