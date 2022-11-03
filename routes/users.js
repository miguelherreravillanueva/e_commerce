const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middleware/authentication");
const router = express.Router()

router.post("/createUser",UserController.createUser)
router.post("/loginUser",UserController.loginUser)
router.get("/getUsers",authentication,UserController.getUsers)
router.delete("/logoutUser",authentication, UserController.logoutUser)

module.exports = router;