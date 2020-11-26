const qs = require("qs");
const moment = require("moment");
const Sequelize = require("sequelize");
const db = require("../../models/sequelize");
const jwtToken = require("../../jwtTokenValidation/jwtValidation");
require("../../config/loggerConfig");
const Users = db.users;

module.exports.findUsersByOrg = async (req, res) => {
 
    
};
