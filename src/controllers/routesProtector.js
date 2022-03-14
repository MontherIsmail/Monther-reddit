const jwt = require('jsonwebtoken');

const routesProtector = (req, res, next) => {
  jwt.verify(req.cookies.token, 'secretKey', (err, decoded) => {
    if (err) {
      res.status(401).json({ msg: 'not auth' });
    } else {
      next();
    }
  });
};
module.exports = { routesProtector };