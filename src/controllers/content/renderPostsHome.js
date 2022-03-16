const { renderPostsDB } =require('../../database/queries/queryContent');

const renderPostsHome = (req, res) => {
    renderPostsDB()
    .then(data => res.json(data.rows))
    .catch(err => err.details ? next(customErr('Something Wrong', 409)) : next(err));
}

module.exports = { renderPostsHome };