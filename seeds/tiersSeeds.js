const { Tiers } = require('../models');

const tiersData = [
    {
        name: "Tier 1",
        services: "Access to gym floor",
        description: "most basic subscription",
        price: 10,
    },
    {
        name: "Tier 2",
        services: "Access to gym floor and gym classes",
        description: "most silver subscription",
        price: 15,
    },
    {
        name: "Tier 3",
        services: "Access to gym floor, gym classes, personal trainers, and the spa",
        description: "most golden subscription",
        price: 20,
    }
];

const seedTiers = () => Tiers.bulkCreate(tiersData); 

module.exports = seedTiers; 