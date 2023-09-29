const sequelize = require('../config/connection');
const seedUser = require('./userSeeds');
const seedTiers = require('./tiersSeeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedTiers();
    
    process.exit(0);
};

seedAll();