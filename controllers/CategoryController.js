const { Category } = require('../models/index.js');

const CategoryController = {
    createCategory(req, res) {
             Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Category successfully created', category }))
            .catch(console.error)
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
}

module.exports = CategoryController