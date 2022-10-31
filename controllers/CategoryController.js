const { Category } = require('../models/index.js');

const CategoryController = {
    create(req, res) {
        req.body.role = "category";
        Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Category successfully created', user }))
            .catch(console.error)
    },
}

module.exports = CategoryController