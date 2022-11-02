const { User, Token} = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
// const { Op } = Sequelize;

const UserController = {
    createUser(req, res) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password, 10)
        User.create({ ...req.body, password: password })
            .then(user => res.status(201).send({ message: 'User successfully created', user }))
            .catch(console.error)
    },

    loginUser(req, res) {
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then((user) => {
          if (!user) {
            return res
              .status(400)
              .send({ message: "Incorrect user or password" });
          }
          const isMatch = bcrypt.compareSync(req.body.password, user.password);
          if (!isMatch) {
            return res
              .status(400)
              .send({ message: "Incorrect user or password" });
          }
          const token = jwt.sign({ id: user.id }, jwt_secret);
          Token.create({ token, UserId: user.id });       
          res.send({ message: "Wellcome " + user.name, user, token });
        });
      },
}

module.exports = UserController;