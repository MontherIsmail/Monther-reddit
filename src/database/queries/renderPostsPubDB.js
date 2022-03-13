const connection = require('../config/connection');

const renderPostsPubDB = () => {
    return connection.query({
        text   : 'SELECT name, vote, text FROM users INNER JOIN posts ON (users.id = posts.user_id);'
    })
};

module.exports = { renderPostsPubDB };