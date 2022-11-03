const { Order, Product } = require("../models/index");

const OrderController = {
  async createOrderProduct(req, res) {
    try {
      const order = await Order.create({ ...req.body, UserId: req.user.id });
      order.addProduct(req.body.ProductId);
      res.send({ msg: "Order successfully created", order });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while creating order" });
    }
  },
  async getAllOrders(req, res) {
    try {
      const orders = await Order.findAll({
        include: Product,
      });
      res.send({ msg: "Your orders", orders });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error finding your books" });
    }
  },
};

module.exports = OrderController;
