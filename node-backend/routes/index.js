const express = require("express");
const bodyParser = require("body-parser");

const /*eslint-disable no-unused-vars*/ usersControllerV1 = require("../controllers/v1/usersController");
const utility = require("../utils/utility");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/profile", async (req, res) => {
  let controller = await utility.getVersionedController(
    req.headers,
    "usersController"
  );
  /*eslint-disable no-eval*/ eval(controller).findUsersByOrg(req, res);
});

router.get("/fr", async (req, res) => {
  let controller = await utility.getVersionedController(
    req.headers,
    "usersController"
  );
  /*eslint-disable no-eval*/ eval(controller).getProfile(req, res);
});

router.get("/users/:id", utility.authorizeAdmin, async (req, res) => {
  let controller = await utility.getVersionedController(
    req.headers,
    "usersController"
  );
  /*eslint-disable no-eval*/ eval(controller).getProfileById(req, res);
});

router.put("/users/me", async (req, res) => {
  let controller = await utility.getVersionedController(
    req.headers,
    "usersController"
  );
  /*eslint-disable no-eval*/ eval(controller).updateUser(req, res);
});

router.put("/users/:id", utility.authorizeAdmin, async (req, res) => {
  let controller = await utility.getVersionedController(
    req.headers,
    "usersController"
  );
  /*eslint-disable no-eval*/ eval(controller).updateUserByAdmin(req, res);
});

router.delete("/users/:id", utility.authorizeAdmin, async (req, res) => {
  let controller = await utility.getVersionedController(
    req.headers,
    "usersController"
  );
  /*eslint-disable no-eval*/ eval(controller).deleteUser(req, res);
});

module.exports = router;
