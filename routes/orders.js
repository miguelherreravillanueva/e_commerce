const express = require("express");
const { getAllOrders } = require("../controllers/OrderController");
const OrderController = require("../controllers/OrderController");
const router = express.Router()
const { authentication } = require("../middleware/authentication");

router.post("/createOrderProduct",authentication, OrderController.createOrderProduct)
router.get("/getAllOrders", OrderController.getAllOrders)

module.exports = router;