const express = require('express');
const router = express.Router();
const { signUp, login, renderPostsPub } = require('../controllers');


router.get('/', renderPostsPub);
router.post('/signup', signUp);
router.post('/login', login)



module.exports = router;