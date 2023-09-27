const User = require('./User');
const Tiers = require('./Tiers');

User.hasMany(Tiers, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tiers.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Tiers };
