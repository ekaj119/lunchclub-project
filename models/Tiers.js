const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tiers extends Model { }

Tiers.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Basic",
    },
    services: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tiers',
  }
);


module.exports = Tiers;