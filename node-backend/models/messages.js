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
      sender: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      receiver: {
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
    Recognitions.belongsTo(models.users, {
      foreignKey: "receiver",
    });
    Messages.belongsTo(models.users, {
      foreignKey: "sender",
    });
  };

  return Messages;
};
