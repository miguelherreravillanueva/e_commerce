const { User, Products } = require('../models/index.js');

const bcrypt = require('bcryptjs');

const UserController = {
    create(req, res) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password, 10)
        User.create({ ...req.body, password: password })
            .then(user => res.status(201).send({ message: 'Usuario creado con éxito', user }))
            .catch(console.error)
    },
}