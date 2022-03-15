const jwt = require('jsonwebtoken');

const routesProtector = (req, res, next) => {
  jwt.verify(req.cookies.token, 'secretKey', (err, decoded) => {
    if (err) {
      res.status(401).json({ msg: 'not auth' });
    } else {
      req.id = decoded.id;
      next();
    }
  });
};
module.exports = { routesProtector };