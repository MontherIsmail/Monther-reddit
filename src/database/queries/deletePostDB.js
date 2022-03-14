const connection = require('../config/connection');

const deletePostDB = (post_id) => {
    return connection.query({
        text : 'DELETE FROM posts WHERE id = ($1)',
        values : [post_id]
    })
}

module.exports = { deletePostDB };