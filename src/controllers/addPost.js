const { addPostDB } = require('../database/queries');
const { customErr } = require('../errors');

const addPost = (req, res) => {
    const { text, user_id } = req.body;
    addPostDB(text, user_id)
    .catch(err => err.details ? next(customErr('Something Wrong', 409)) : next(err));
    
};

module.exports = { addPost };