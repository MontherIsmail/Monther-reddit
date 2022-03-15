const { addPostDB } = require('../database/queries');

const addPost = (req, res) => {
    const { value } = req.body;
    const user_id = req.id;
    addPostDB(value, user_id)
    .then(data => res.json({message: 'post added'}))
    .catch((err) => console.log(22, err));
};

module.exports = { addPost };