'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [

      {
        name: 'Mufasa',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Simba',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nala',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sarabi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Scar',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
  }
};
