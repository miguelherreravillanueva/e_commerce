const { User, Order,Product,Token, Sequelize} = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const { Op } = Sequelize;



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

      async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.send(users);
          } catch (error) {
            console.error(err);
            res.status(500).send(err);
          }
        },

        async logoutUser(req, res) {
            try {
              await Token.destroy({
                where: {
                  [Op.and]: [
                    { UserId: req.user.id },
                    { token: req.headers.authorization },
                  ],
                },
              });
              res.send({ message: "Successfully disconnected" });
            } catch (error) {
              console.log(error);
              res
                .status(500)
                .send({ message: "Error while connecting" });
            }
          },
}

module.exports = UserController