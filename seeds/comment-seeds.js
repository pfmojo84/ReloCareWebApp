const { Comment } = require('../models');

const commentData = [
    {
        content: 'test1!',
        user_id: 2,
        post_id: 3
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;