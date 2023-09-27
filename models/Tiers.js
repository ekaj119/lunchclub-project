const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tiers extends Model {}
//Commented Out old attributes from when it was projects just in case this code doesnt work so i can revert it.
Tiers.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      defaultValue: "Basic",
    },
    // description: {
    //   type: DataTypes.STRING,
    // },
    // date_created: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // },
    // needed_funding: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false,
    // },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
    services: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  price: {
      type: DataTypes.FLOAT,
      allowNull: false,
  },
  upgradable: {
      type: DataTypes.BOOLEAN,
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

// Tiers.sync();
module.exports = Tiers;