const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginSchema = require("../validation/login.schema");
const { loginDB } = require("../database/queries");

const login = (req, res) => {
  const { email, password } = req.body;
  loginSchema
    .validateAsync(req.body)
    .then((data) => loginDB(email))
    .then((result) => result.rows[0])
    .then((userData) => {
      if (userData === undefined) {
        res.status(400).json({
          message: "User Dosen't Exist",
        });
      } else {
        bcrypt.compare(password, userData.password).then((isMatch) => {
          if (!isMatch) {
            res.status(400).json({ message: "Incorrect Name Or Password" });
          } else {
            const token = jwt.sign({ id: userData.id,name: userData.name}, "secretKey");
            res.cookie("name", userData.name);
            res.status(200).cookie("token", token).json({ redirect: "/" });
          }
        });
      }
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = login;
