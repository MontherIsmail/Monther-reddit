const {renderPostsDB} =require('../../database/queries/queryContent');
const {customErr} = require('../../errors');

const renderPostsHome = (req, res) => {
  renderPostsDB()
      .then((data) => res.json(data.rows))
      // eslint-disable-next-line max-len
      .catch((err) => err.details ? next(customErr('Something Wrong', 409)) : next(err));
};

module.exports = {renderPostsHome};
