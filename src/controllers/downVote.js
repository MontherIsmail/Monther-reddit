const { downVoteDB } = require('../database/queries');
const { customErr } = require('../errors');

const downVote = (req, res) => {
    const { post_id } = req.body;
    downVoteDB(post_id)
    .then(result => res.json('Vote Decreased'))
    .catch(err => err.details ? next(customErr('Something Wrong', 409)) : next(err));
}

module.exports = { downVote };