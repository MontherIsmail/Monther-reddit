const connection = require('../../config/connection');

// eslint-disable-next-line camelcase
const deletePostDB = (post_id, user_id) => {
  return connection.query({
    text: 'DELETE FROM posts WHERE id = ($1) AND user_id = ($2)',
    // eslint-disable-next-line camelcase
    values: [post_id, user_id],
  });
};

module.exports = {deletePostDB};
