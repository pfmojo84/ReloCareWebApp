const { User } = require('../models');

const userData = [
    {
        username: "Admin",
        email:'admin@ReloCare.com',
        password: 'ReloCare123'
    },
    {
        username: "test1",
        email: 'test1@gmail.com',
        password: 'cookies123'
    },
    {
        username: "test2",
        email: 'test2@gmail.com',
        password: 'th1s1saw3som3'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;