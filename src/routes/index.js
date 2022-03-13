const express = require('express');
const router = express.Router();
const { signUp, login, renderPostsPub, addPost, upVote, downVote } = require('../controllers');


router.get('/render', renderPostsPub);
router.post('/signup', signUp);
router.post('/login', login)
router.post('/addpost', addPost);
router.post('/upvote', upVote)
router.post('/downvote', downVote)



module.exports = router;