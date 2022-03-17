const connection = require('../config/connection');

// eslint-disable-next-line camelcase
const upVoteDB = (post_id) => {
  return connection.query({
    text: 'UPDATE posts SET vote = vote + 1 WHERE id = ($1);',
    // eslint-disable-next-line camelcase
    values: [post_id],
  });
};

module.exports = {upVoteDB};
