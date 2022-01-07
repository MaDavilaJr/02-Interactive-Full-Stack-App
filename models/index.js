const User = require('./User');
const Location = require('./Location');
const Review = require('./Review');

User.hasMany(Location, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Location.belongsTo(User, {
  foreignKey: 'user_id'
});

Location.hasMany(Review, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
})

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Review.belongsTo(Location, {
  foreignKey: 'location_id'
})



module.exports = { User, Location, Review };
