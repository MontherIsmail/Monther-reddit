const connection = require('../../config/connection');

const checkEmail = (email) => {
  return connection.query({
    text: 'SELECT * FROM users WHERE email = ($1);',
    values: [email],
  });
};

module.exports = {checkEmail};
