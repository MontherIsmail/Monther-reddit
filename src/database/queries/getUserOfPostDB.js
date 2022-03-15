const connection = require('../config/connection');

const getUserOfPostDB = (post_id) => {
    return connection.query({
        text : 'SELECT user_id FROM posts WHERE id = ($1);',
        values : [post_id]
    })
}

module.exports = { getUserOfPostDB };