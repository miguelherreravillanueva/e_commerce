"use strict";

const { INTEGER } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Mouse Asus",

        price: 222,

        description: "New asus mouse",
        
        CategoryID : 1,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Iphone 3",

        price: 222,

        description: "New asus mouse",
        
        CategoryId: 1, 

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Logitech Keyboard",

        price: 345,

        description: "New keyboard form Logitech",

        CategoryId: 1,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Iphone",

        price: 999,

        description: "New apple phone",

        CategoryId: 1,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Pc gaming",

        price: 3333,

        description: "New Pc",

        CategoryId: 1,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
    ]);
  },
  
  async down(queryInterface, Sequelize) {},
};
