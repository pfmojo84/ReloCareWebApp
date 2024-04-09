const { Post } = require('../models');
const postData = [
    {
        post_title: "test 1",
        content: 'test 1',
        user_id: 1,
        post_state: "nh",
        category: "transport"
    },
    {
        post_title: "test 2",
        content: 'test 2',
        user_id: 2,
        post_state: "nh",
        category: "transport"
    },
    {
        post_title: "test 3",
        content: 'test 3',
        user_id: 3,
        post_state: "nh",
        category: "transport"
    }
];

const SeedPost = () => Post.bulkCreate(postData);
module.exports = SeedPost;