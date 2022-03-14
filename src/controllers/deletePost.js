const { deletePostDB } = require('../database/queries');

const deletePost = (req, res) => {
    const { post_id } = req.body;

    deletePostDB(post_id)
    .then(data => res.json(data.rows))
    .catch(err => console.log(err));
};

module.exports = { deletePost };