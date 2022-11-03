const { Order } = require("../models/index");
const order = require("../models/order");

const OrderController = {
  createOrder(req, res) {
    Order.create(req.body)
      .then((order) =>
        res
          .status(201)
          .send({ message: "Order successfully created", order })
      )
      .catch((err) => console.error(err));
  },
};

module.exports = OrderController;
