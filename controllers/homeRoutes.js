const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {

  try{
      const dbPostData = await Post.findAll({
          include: [
              {
                  model: User,
                  attributes: ['username', 'id']
              },
          ],
      });
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render('homepage', {
          posts,
          loggedIn: req.session.loggedIn,
          userId: req.session.userId,
          showDashboard: true
      });
  }catch (error) {
      console.log(error);
      res.status(500).json(error);
  }
})

router.get('/dashboard/:id', withAuth, async (req,res) => {
  try{
      const dbUserData = await Post.findAll({
          where: { user_id: req.params.id }
      })

      const posts = dbUserData.map((post) => post.get({ plain: true }));
      
      res.render('dashboard', {
          posts,
          loggedIn: req.session.loggedIn,
          showDashboard: false
      })

  } catch (error) {
      console.error(error);
      res.status(500).json(error)
  }
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      console.log('logged in');
      res.redirect('/');
      return;
  }

  res.render('login');
})

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
      console.log('logged in');
      res.redirect('/');
      return;
  }

  res.render('signup');
})

router.get('/posts/:id', withAuth, async (req, res) => {
  try{
      const dbCommentData = await Comment.findAll({
          where: {
              post_id: req.params.id
          },
          include: [
              {
                  model: User,
                  attributes: ['username'],
              }
          ]
      })
      req.session.postId = req.params.id;

      const comments = dbCommentData.map((comment) => comment.get({ plain: true }));

      const dbPostData = await Post.findByPk(req.params.id, {
          include:[
              {
                  model: User,
                  attributes: ['username']
              }
          ]});
      const post = dbPostData.get({ plain: true });

      res.render('post', {
          loggedIn: req.session.loggedIn,
          showDashboard: false,
          postId: req.session.postId,
          post,
          comments

      })

  } catch (error) {
      console.error(error);
      res.status(500).json(error);
  }
});


router.get('/newpost', withAuth, (req, res) => {
  res.render('newpost', {
      userId: req.session.userId,
      loggedIn: req.session.loggedIn,
      showDashboard: false
  })
})

router.get('/newcomment', withAuth, async (req, res) => {

  const dbPostData = await Post.findByPk(req.session.postId, {
      include: [
          {
              model: User,
              attributes: ['username']
          }
      ]
  });
  const post = dbPostData.get({ plain: true });

  res.render('newcomment', {
      loggedIn: req.session.loggedIn,
      showDashboard: false,
      postId: req.session.postId,
      post
  });
})


// all the routes for the states grouped by state 

//all nh routes
router.get('/newhampshire', withAuth, async (req, res) => {
    res.render('newhampshire', {
        loggedIn: req.session.loggedIn,
        showDashboard: false,
        postId: req.session.postId
    })
})

router.get('/nhtransport', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'nh',
                category: 'transport'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('nhtransport', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/nhlegal', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'nh',
                category: 'legal'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('nhlegal', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/nhfood', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'nh',
                category: 'food'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('nhfood', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/nhhealth', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'nh',
                category: 'health'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('nhhealth', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})


// all vt routes
router.get('/vermont', withAuth, async (req, res) => {
    res.render('vermont', {
        loggedIn: req.session.loggedIn,
        showDashboard: false,
        postId: req.session.postId
    })
})

router.get('/vttransport', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'vt',
                category: 'transport'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('vttransport', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/vtlegal', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'vt',
                category: 'legal'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('vtlegal', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/vtfood', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'vt',
                category: 'food'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('vtfood', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/vthealth', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'vt',
                category: 'health'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('vthealth', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

//all ma routes
router.get('/massachusetts', withAuth, async (req, res) => {
    res.render('massachusetts', {
        loggedIn: req.session.loggedIn,
        showDashboard: false,
        postId: req.session.postId
    })
})

router.get('/matransport', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'ma',
                category: 'transport'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('matransport', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/malegal', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'ma',
                category: 'legal'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('malegal', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/mafood', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'ma',
                category: 'food'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('mafood', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

router.get('/mahealth', withAuth, async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'ma',
                category: 'health'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('mahealth', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts
        })
    } catch (error){
        res.status(500)
    }
})

module.exports = router;

