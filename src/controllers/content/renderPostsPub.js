const { renderPostsDB } = require('../../database/queries/queryContent');
const { customErr } = require('../../errors');

const renderPostsPub = (req, res) => {
    console.log('monther');
    renderPostsDB()
    .then(data => res.json(data.rows))
    .catch(err => err.details ? next(customErr('Something Wrong', 409)) : next(err));
};

module.exports = { renderPostsPub };