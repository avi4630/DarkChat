const express = require("express");
const bodyParser = require("body-parser");

const usersController = require("../controllers/users");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/users", usersController.getUsers);
router.get("/profile", usersController.getProfile);
router.post("/messages/users/:id", usersController.sendMessage);
router.get("/messages/users/:id", usersController.getMessage);
router.get("/add_friend/:id", usersController.addFriend);

// router.get("/login", async (req, res) => {
//   let controller = await utility.getVersionedController(
//     req.headers,
//     "usersController"
//   );
//   /*eslint-disable no-eval*/ eval(controller).getProfile(req, res);
// });


// router.delete("/users/:id", utility.authorizeAdmin, async (req, res) => {
//   let controller = await utility.getVersionedController(
//     req.headers,
//     "usersController"
//   );
//   /*eslint-disable no-eval*/ eval(controller).deleteUser(req, res);
// });

module.exports = router;
