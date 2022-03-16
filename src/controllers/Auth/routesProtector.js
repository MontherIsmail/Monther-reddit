const jwt = require('jsonwebtoken');
const { customErr } = require('../../errors');

const routesProtector = (req, res, next) => {
  jwt.verify(req.cookies.token, 'secretKey', (err, decoded) => {
    if (err) {
      next(customErr('Not Auth', 401));
    } else {
      req.id = decoded.id;
      next();
    }
  });
};
module.exports = { routesProtector };