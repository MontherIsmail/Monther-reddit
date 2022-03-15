const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { signUpSchema } = require('../validation');
const { addUserDB } = require('../database/queries');
const { customErr } = require('../errors');


const signUp = (req, res) => {
    const { name, email, password } = req.body;
    const token = jwt.sign(name, 'secretKey');
    signUpSchema
    .validateAsync(req.body)
    .then(res => bcrypt.hash(password, 10))
    .then(hashedPass => addUserDB(name, email, hashedPass))
    .then(result => {
        res.cookie('name', req.body.name);
        res.status(201).cookie('token', token).json({redirect : '/'});
    })
    .catch(err => err.details ? next(customErr('Input Is Invalid', 400)) : next(err));
}

module.exports = signUp;