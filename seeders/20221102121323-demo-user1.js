"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Mouse Asus",

        price: 222,

        description: "New asus mouse",

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Iphone 3",

        price: 222,

        description: "New asus mouse",

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Logitech Keyboard",

        price: 345,

        description: "New keyboard form Logitech",

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Iphone",

        price: 999,

        description: "New apple phone",

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Pc gaming",

        price: 3333,

        description: "New Pc",

        createdAt: new Date(),

        updatedAt: new Date(),
      },
    ]);
  },
  
  async down(queryInterface, Sequelize) {},
};
