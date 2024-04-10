const { Post } = require('../models');
const postData = [
    {
        post_title: "Transportation Challenges in NH? Check this out.",
        content: 'NHCarePath offers an overview of different options for people seeking access to affordable transportation options in New Hampshire. Visit dhhs.nh.gov to see what’s available in your region.',
        user_id: 1,
        post_state: "nh",
        category: "transport"
    },
    {
        post_title: "Upcoming Community Discussion - Keene, NH",
        content: 'April 18th at 9am - NH Alliance for Immigrants and Refugees and Welcoming New Hampshire are hosting a forum to discuss the rise in hate crimes and the impact this has on victims and the community. Representatives from Law Enforcement, the ACLU, and immigration advocates, will participate in multiple panels to drive this important and timely conversation! ',
        user_id: 2,
        post_state: "nh",
        category: "legal"
    },
    {
        post_title: "Upcoming Mobile Food Pantry on April 14",
        content: 'NH Food Bank will be hosting a mobile food pantry in Concord on Sunday, April 14. Food will be distributed between 12 - 2pm or until supplies last.',
        user_id: 3,
        post_state: "nh",
        category: "food"
    },
    {
        post_title: "Childcare Equity Event - Registration Deadline April 14th!",
        content: 'Last chance to register for this important community event being hosted by Welcoming NH on Saturday, April 20th at the Boys & Girls Club of Manchester. Representatives from local child care centers, Head Start, and the NH Housing Authority will be in attendance. Food, childcare, language interpretation, and local transportation are all offered for free for those who pre-register! Be sure to take advantage and we hope to see you on the 20th!',
        user_id: 3,
        post_state: "nh",
        category: "healthcare"
    }
];

const SeedPost = () => Post.bulkCreate(postData);
module.exports = SeedPost;