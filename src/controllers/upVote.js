const { upVoteDB } = require('../database/queries');
const { customErr } = require('../errors');

const upVote = (req, res) => {
    const { post_id } = req.body;
    upVoteDB(post_id)
    .then(result => res.json('Vote Increased'))
    .catch(err => err.details ? next(customErr('Can Not Update', 409)) : next(err));
}

module.exports = { upVote };
