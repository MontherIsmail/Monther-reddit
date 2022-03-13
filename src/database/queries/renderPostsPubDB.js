const connection = require('../config/connection');

const renderPostsPubDB = () => {
    return connection.query({
        text   : 'SELECT name, vote, text FROM users INNER JOIN posts ON id = user_id;'
    })
};

module.exports = renderPostsPubDB;