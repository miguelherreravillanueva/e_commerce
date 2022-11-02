const { Product } = require("../models/index");

const ProductController = {
  createProduct(req, res) {
    Product.create(req.body)
      .then((product) =>
        res
          .status(201)
          .send({ message: "Product created successfully", product })
      )
      .catch((err) => console.error(err));
  },
  async updateProduct(req, res) {
    await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("Product updated successfully");
  },
};

module.exports = ProductController;
