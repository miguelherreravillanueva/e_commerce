const { Category, Product, Sequelize } = require('../models/index.js');
const { Op } = Sequelize;

const CategoryController = {
    createCategory(req, res) {
        Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Category successfully created', category }))
            .catch(console.error)
    },

    getCategories(req, res) {
        Category.findAll({ include: [Product] })
            .then((categories) => res.send(categories))
            .catch((err) => {
                console.error(err);
                res.send(err);
            });
    },

    async getCategoryById(req, res) {
        try {
            const category = await Category.findByPk(req.params.id);
            res.send(category);
        } catch (error) {
            console.error(err);
            res
                .status(500)
                .send({ msg: "Category not found", err });
        }
    },

    async getCategoryByName(req, res) {
        try {
            const category = await Category.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`,
                    },
                },
            });
            res.send(category);
        } catch (error) {
            console.error(err);
            res
                .status(500)
                .send({ msg: "Error finding category", err });
        }
    },

    async updateCategoryById(req, res) {
        try {
          await Category.update({name:req.body.name}, {
            where: {
              id: req.params.id,
            },
          });
          res.send({ msg: "Category successfully updated" });
        } catch (error) {
          console.error(err);
          res
            .status(500)
            .send({ msg: "Error while updating category", err });
        }
      },

    async deleteCategoryById(req, res) {
        await Category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(
            'Category successfully removed'
        )
    },
}


module.exports = CategoryController