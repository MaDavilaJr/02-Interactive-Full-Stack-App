const sequelize = require('../config/connection');
const { Review, User, Location } = require('../models');

const reviewData = [
    {
        description: "This is a cool site",
        user_id: 1,
        location_id: 1
    }
]

const seedReviews = () => Review.bulkCreate(reviewData, {individualHooks: true});

module.exports = seedReviews;