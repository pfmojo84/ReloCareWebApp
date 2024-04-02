const { User } = require('../models');

const userData = [
    {
        username: "Admin",
        email:'admin@ReloCare.com',
        password: 'ReloCare123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module,exports = seedUsers;