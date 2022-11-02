const { Product, Sequelize } = require("../models/index");
const { Op } = Sequelize;

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
  async updateProductById(req, res) {
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
  async deleteProductById(req, res) {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Product has been deleted successfully");
  },
  async getProductById(req, res) {
    Product.findByPk(req.params.id).then((post) => res.send(post));
  },
  async getProductByName(req, res) {
    try {
      const product = await Product.findOne({
        where: {
          name: {
            [Op.like]: `%${req.params.name}%`,
          },
        },
      });
      res.send(product);
    } catch (error) {
      console.error(err);
      res
        .status(see)
        .send({ msg: "Error searching product by name", err });
    }
  },
  async getProductByPrice(req, res) {
    try {
      const product = await Product.findOne({
        where: {
          price: {
            [Op.like]: `%${req.params.price}%`,
          },
        },
      });
      res.send(product);
    } catch (error) {
      console.error(err);
      res
        .status(see)
        .send({ msg: "Error searching product by price", err });
    }
  },
  // async getProductByPriceDesc(req, res) {
  //   try {
  //     const product = await Product.findAll({
  //       where: {
  //         price: prices
  //         order: ["price", "DESC"]
  //       },
  //     });
  //     res.send(product);
  //   } catch (error) {
  //     console.error(err);
  //     res
  //       .status(see)
  //       .send({ msg: "Error searching product by price ordenated", err });
  //   }
  // },
};

module.exports = ProductController;
