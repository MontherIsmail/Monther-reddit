const express = require('express');
const router = express.Router();
const { signUp, login, routesProtector, renderPostsPub, addPost, upVote, downVote, renderPostsHome, deletePost, logout,  } = require('../controllers');
const { notFoundErr, serverErr } = require('../errors');

router.get('/render', renderPostsPub);
router.post('/signup', signUp);
router.post('/login', login);
router.use(routesProtector);
router.post('/addpost', addPost);
router.get('/renderhome', renderPostsHome);
router.post('/upvote', upVote);
router.post('/downvote', downVote);
router.post('/deletepost', deletePost);
router.get('/logout', logout);
router.use(notFoundErr);
router.use(serverErr);



module.exports = router;