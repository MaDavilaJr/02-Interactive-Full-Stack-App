const seedUsers = require('./user-seeds');
const seedLocation = require('./location-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('===========');
    await seedUsers();
    console.log('===========');
    await  seedLocation();
    
    process.exit(0);
}

seedAll();