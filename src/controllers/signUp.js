const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { signUpSchema } = require('../validation');
const { addUserDB } = require('../database/queries');
const { customErr } = require('../errors');


const signUp = (req, res) => {
  const { name, email, password } = req.body;
  signUpSchema
    .validateAsync(req.body)
    .then((res) => bcrypt.hash(password, 10))
    .then((hashedPass) => addUserDB(name, email, hashedPass))
    .then((data) => data.rows[0].id)
    .then((id) => {
      const token = jwt.sign({ id, name }, "secretKey");
      res.status(201).cookie("token", token).json({ redirect: "/" });
    })
    .catch((err) => err.details ? next(customErr('Input Is Invalid', 400)) : next(err));
};

module.exports = signUp;
