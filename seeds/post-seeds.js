const { Post } = require('../models');
const postData = [
    {
        post_title: "New to VT and looking for legal assistance?",
        content: 'The Vermont Asylum Assistance Project is here to help! This organization offers pro bono legal services and promotes the rights of Vermont immigrant communities. Visit their website at ‘vaapvt.org/legal-support’ to learn more and submit an application to receive services.',
        user_id: 2,
        post_state: "vt",
        category: "legal"
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