const connection = require('../../config/connection');

const addPostDB = (text, user_id) => {
    return connection.query({
        text   : 'INSERT INTO posts (text, user_id) VALUES ($1, $2);',
        values : [text, user_id]
    })
}

module.exports = { addPostDB };