const sequelize = require('../config/connection');
const { User, Location } = require('../models');

const locationData = require('./locationData.json');

const userData = [
  {
    name: 'aaron',
    email: 'aaron@mail.com',
    password: 'password123'
  }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;

