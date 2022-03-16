const { join } = require('path');

const serverErr = (err, req, res, next) => {
    res.json({message: err.message, status: err.status });
 }

module.exports = { serverErr };