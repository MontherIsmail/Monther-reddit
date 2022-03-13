const renderPostsPubDB = require('../database/queries');

const renderPostsPub = (req, res) => {
    renderPostsPubDB()
    .then(data => res.json(data.rows))
    .catch(err => console.log(err));
};

module.exports = renderPostsPub;