const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/helpers'); //to add withAuth authentication middleware

// Get all posts
router.post('/', async (req, res) => {
    try {
        const dbPostData = await Post.create({
            post_title: req.body.title,
            content: req.body.content,
            user_id: req.session.userId,
        })
        res.status(200).json(dbPostData);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
})
// renders new comment page and passes necesarry information
router.post('/newcomment', async (req, res) => {

    console.log(`${req.body.conent}im here`)
    try{
         const dbCommentData = await Comment.create({
            content: req.body.content,
            user_id: req.session.userId,
            post_id: req.session.postId
         })
         res.status(200).json(dbCommentData)
    } catch (error){
        console.error(error);
        res.status(500).json(error);
    }
})

/*
// Get a single post by id
router.get('/:id', async (req, res) => {
    try {
        //find a single post by its primary key (ID)
        const postData = await Post.findByPk(req.params.id);
        if (!postData) {
            //if no post is found, return a 404 error
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        //send the found post as a JSON response
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new post

// Update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        //update a post based on the request body data and the specified id
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        //return 404 error if no post is found
        if (!postData[0]) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        //send a success response
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        //delete a post based on the specified ID
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!postData) {
            //return 404 error if no post is found
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        //send success response if post was deleted
        res.status(200).json({ message: 'Post deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
});
*/

module.exports = router;
