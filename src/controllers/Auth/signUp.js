const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {signUpSchema} = require('../../validation');
const {addUserDB, checkEmail} = require('../../database/queries/queryAuth');
const {customErr} = require('../../errors');

const signUp = (req, res, next) => {
  const {name, email, password} = req.body;
  signUpSchema
      .validateAsync(req.body)
      .then(() => checkEmail(email))
      .then((data) => {
        console.log('data', data);
        if (data.rows.length > 0) {
          throw customErr('Email Used Before', 409);
        } else {
          return password;
        }
      })
      .then((res) => bcrypt.hash(password, 10))
      .then((hashedPass) => addUserDB(name, email, hashedPass))
      .then((data) => data.rows[0].id)
      .then((id) => {
        const token = jwt.sign({id, name}, 'secretKey');
        res.status(201).cookie('token', token).json({redirect: '/'});
      })
      .catch((err) => {
        if (err.message) {
          next(customErr(err.message, 400));
        } else {
          next(err);
        }
      });
};

module.exports = {signUp};
