const connection = require('../../config/connection');

// eslint-disable-next-line camelcase
const addPostDB = (text, user_id) => {
  return connection.query({
    text: 'INSERT INTO posts (text, user_id) VALUES ($1, $2);',
    // eslint-disable-next-line camelcase
    values: [text, user_id],
  });
};

module.exports = {addPostDB};
