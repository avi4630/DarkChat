const qs = require("qs");
const moment = require("moment");
const Sequelize = require("sequelize");
const db = require("../models/sequelize");
//const jwtToken = require("../../jwtTokenValidation/jwtValidation");
const Users = db.users;
const Friends = db.friends;
const Messages = db.messages;

module.exports.getUsers = async (req, res) => {
  try {
    const user = await Users.findAll();
    res.status(200).json(user);
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.getProfile = async (req, res) => {
  try {
    let email = "avimanepatil@gmail.com";
    const user = await Users.findOne({
      include: {
        model: Friends,
        as: "self",
        include: {
          model: Users,
          as: "user_friends"
        },
      },
      where: {
        email: email,
      },
    });
    let friends = [];
    user.self.map(user => {
      friends.push(user.user_friends);
    })
    user.dataValues.friends = friends;
    delete user.dataValues.self;
    res.json(user);
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.sendMessage = async (req, res) => {
  try {
    let email = "avimanepatil@gmail.com";
    const id = req.params.id;
    const message = req.body.message;
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    const data = {
      sender_id: user.id,
      message: message,
      receiver_id: id,
      send_at: Date.now()
    }
    await Messages.create(data);
    res.status(201).json({ data: data });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.getMessage = async (req, res) => {
  try {
    let email = "avimanepatil@gmail.com";
    const id = req.params.id;
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    const data = await Messages.findAll({
      attributes: ["id", "sender_id", "receiver_id", "sender_id", "send_at", "message"],
      order: [
        ['send_at', 'ASC'],
      ],
      where: {
        sender_id: {
          [Sequelize.Op.or]: [id, user.id]
        },
        receiver_id: {
          [Sequelize.Op.or]: [id, user.id]
        }
      }
    });
    res.status(200).json(data);
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.addFriend = async (req, res) => {
  try {
    let email = "avimanepatil@gmail.com";
    const id = req.params.id;
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    const data = {
      user_id: user.id,
      friend_id: id,
    }
    await Friends.create(data);
    res.status(201).json({ data: data });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};