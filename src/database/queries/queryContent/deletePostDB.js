const connection = require('../../config/connection');

const deletePostDB = (post_id, user_id) => {
    return connection.query({
        text : 'DELETE FROM posts WHERE id = ($1) AND user_id = ($2)',
        values : [post_id, user_id]
    })
}

module.exports = { deletePostDB };