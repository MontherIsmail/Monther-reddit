const { upVoteDB } = require('../database/queries');

const upVote = (req, res) => {
    const { post_id } = req.body;
    upVoteDB(post_id)
    .then(result => res.json('Vote Increased'))
    .catch(err => res.json({ msg: 'can not update' }));
}

module.exports = { upVote };