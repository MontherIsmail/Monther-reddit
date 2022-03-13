const express = require('express');
const router = express.Router();
const { signUp, login, renderPostsPub, addPost } = require('../controllers');


router.get('/render', renderPostsPub);
router.post('/signup', signUp);
router.post('/login', login)
router.post('/addpost', addPost);


module.exports = router;