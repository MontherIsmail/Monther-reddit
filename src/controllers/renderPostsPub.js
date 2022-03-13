const { renderPostsPubDB } = require('../database/queries');

const renderPostsPub = (req, res) => {
    console.log('monther');
    renderPostsPubDB()
    .then(data => res.json(data.rows))
    .then(result => res.json('Rendered'))
    .catch(err => res.json(err));
};

module.exports = { renderPostsPub };