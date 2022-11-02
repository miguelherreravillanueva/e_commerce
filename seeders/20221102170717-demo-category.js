'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      
{
  name: 'Keyboards',
  createdAt: new Date(),
  updatedAt: new Date()
},

{
  name: 'Mouses',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Pcs',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Tablets',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Phones',
  createdAt: new Date(),
  updatedAt: new Date()
}
      
    ]);
  },
  
  async down(queryInterface, Sequelize) {},
};