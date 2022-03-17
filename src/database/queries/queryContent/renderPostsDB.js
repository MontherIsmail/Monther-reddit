const connection = require('../../config/connection');

const renderPostsDB = () => {
  return connection.query({
    // eslint-disable-next-line max-len
    text: 'SELECT posts.id, users.name, posts.vote, posts.text FROM users INNER JOIN posts ON (users.id = posts.user_id) ORDER BY vote DESC;',
  });
};

module.exports = {renderPostsDB};
