const connection = require('../../config/connection');

const addUserDB = (name, email, hashedPass) => {
  return connection.query({
    // eslint-disable-next-line max-len
    text: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id;',
    values: [name, email, hashedPass],
  });
};

module.exports = {addUserDB};
