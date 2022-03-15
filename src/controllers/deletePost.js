const { deletePostDB } = require('../database/queries');
const { customErr } = require('../errors');

const deletePost = (req, res) => {
    const { post_id } = req.body;

    deletePostDB(post_id)
    .then(data => res.json(data.rows))
    .catch(err => err.details ? next(customErr('Something Wrong', 409)) : next(err));
};

module.exports = { deletePost };