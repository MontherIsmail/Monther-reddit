const { addPostDB } = require('../database/queries');

const addPost = (req, res) => {
    const { text, user_id } = req.body;
    addPostDB(text, user_id)
    .catch(err => console.log(err));
};

module.exports = { addPost };