'use strict';
const bcrypt = require('bcrypt')
const {User} = require('../models')
const user = require('../models/user')
/** @type {import('sequelize-cli').Migration} */
module.exports = module.exports = {
  async up(queryInterface) {
    const usersData = [
      {
        name: 'Никон',
        password: await bcrypt.hash("1234", 10),
      },
      {
        name: 'Ефросинья',
        password: await bcrypt.hash("4321", 10),
      },
      {
        name: 'Лёха',
        password: await bcrypt.hash("1221", 10),
      },
    ];
    const users = usersData.map((chel) => ({
      ...chel,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
