const { renderPostsDB } =require('../database/queries');

const renderPostsHome = (req, res) => {
    renderPostsDB()
    .then(data => res.json(data.rows))
    .catch(err => console.log(err));
}

module.exports = { renderPostsHome };