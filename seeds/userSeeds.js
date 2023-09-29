const { User } = require('../models');

const userData = [
    {
        name: 'Tom',
        email: 'tom@email.com',
        password: 'password',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;