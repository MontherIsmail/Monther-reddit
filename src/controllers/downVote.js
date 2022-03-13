const { downVoteDB } = require('../database/queries');

const downVote = (req, res) => {
    const { post_id } = req.body;
    downVoteDB(post_id)
    .then(result => res.json('Vote Decreased'))
    .catch(err => res.json({ msg: 'can not update' }));
}

module.exports = { downVote };