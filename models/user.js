'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please, introduce your name",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please, introduce your email",
        },
        isEmail: {
          msg: "Please, introduce a correct form of an email",
        },
      },
    },
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};