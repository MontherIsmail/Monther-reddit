const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loginSchema = require('../../validation/login.schema');
const {loginDB} = require('../../database/queries/queryAuth');
const {customErr} = require('../../errors');

const login = (req, res, next) => {
  const {email, password} = req.body;
  loginSchema
      .validateAsync(req.body)
      .then((data) => loginDB(email))
      .then((result) => result.rows[0])
      .then((userData) => {
        if (userData === undefined) {
          throw customErr('User Dosen\'t Exist', 409);
        } else {
          bcrypt.compare(password, userData.password).then((isMatch) => {
            if (!isMatch) {
              throw customErr('Incorrect Name Or Password', 409);
            } else {
              // eslint-disable-next-line max-len
              const token = jwt.sign({id: userData.id, name: userData.name}, 'secretKey');
              res.cookie('name', userData.name);
              res.status(200).cookie('token', token).json({redirect: '/'});
            }
          })
              .catch((err) => {
                if (err) {
                  next(customErr(err, 409));
                } else {
                  next(err);
                }
              });
        }
      })
      .catch((err) => {
        if (err) {
          next(customErr('Incorrect Name Or Password', 400));
        } else {
          next(err);
        }
      });
};

module.exports = {login};
