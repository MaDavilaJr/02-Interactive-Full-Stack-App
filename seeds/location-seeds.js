const sequelize = require('../config/connection');
const { User, Location } = require('../models');


const locationData = [
  {
    name: "Sal's Shred Shed",
    description: "Sick",
    latitude: 34.0927382,
    longitude: -117.9366049
  },
  {
    name: "Sal's Second Shred Shed",
    description: "Very sick",
    latitude: 34.0927382,
    longitude: -117.9366049
  },
  {
  name: "Sal's Sick Third Shredder Shed",
  description: "Extremely sick & Ill",
  latitude: 34.0927382,
  longitude: -117.9366049
  }
]

const seedLocation = () => Location.bulkCreate(locationData, {individualHooks: true});

module.exports = seedLocation;
