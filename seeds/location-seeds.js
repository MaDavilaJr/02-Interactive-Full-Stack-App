const sequelize = require('../config/connection');
const { User, Location } = require('../models');


const locationData = [
  {
    name: "Sal's Shred",
    description: "sal@hotmail.com",
    latitude: 34.0927382,
    longitude: -117.9366049
  },
  {
      
  }
]

const seedLocation = () => Location.bulkCreate(locationData, {individualHooks: true});

module.exports = seedLocation;
