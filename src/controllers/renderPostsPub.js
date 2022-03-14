const { renderPostsDB } = require('../database/queries');

const renderPostsPub = (req, res) => {
    console.log('monther');
    renderPostsDB()
    .then(data => res.json(data.rows))
    .catch(err => res.json(err));
};

module.exports = { renderPostsPub };