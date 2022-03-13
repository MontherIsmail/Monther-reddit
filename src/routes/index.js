const express = require('express');
const router = express.Router();
const { signUp, login, renderPostsPub, addPost, upVote } = require('../controllers');


router.get('/render', renderPostsPub);
router.post('/signup', signUp);
router.post('/login', login)
router.post('/addpost', addPost);
router.post('/upvote', upVote)


module.exports = router;