const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {upVote, downVote} = require('../controllers');
const {signUp, login, logout, routesProtector} = require('../controllers/Auth');
// eslint-disable-next-line max-len
const {renderPostsPub, renderPostsHome, addPost, deletePost} = require('../controllers/content');
const {notFoundErr, serverErr} = require('../errors');

router.get('/render', renderPostsPub);
router.post('/signup', signUp);
router.post('/login', login);
router.use(routesProtector);
router.post('/addpost', addPost);
router.get('/renderhome', renderPostsHome);
router.post('/upvote', upVote);
router.post('/downvote', downVote);
router.delete('/deletepost/:post_id', deletePost);
router.get('/logout', logout);
router.use(notFoundErr);
router.use(serverErr);


module.exports = router;
