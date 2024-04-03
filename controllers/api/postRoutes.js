const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/helpers'); //to add withAuth authentication middleware

// Get all posts
router.get('/', async (req, res) => {
    try {
        //find all posts in the database
        const postData = await Post.findAll();
        //send the retrieved posts as a JSON response
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

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
router.post('/', withAuth, async (req, res) => {
    try {
        //create a new post with the data from the request body
        //and the user_id from the session
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        });
        //send newly created post as a JSON response
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

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

module.exports = router;
