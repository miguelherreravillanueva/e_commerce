const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middleware/authentication");
const router = express.Router()

// router.post("/createUser",UserController.createUser)


module.exports = router;