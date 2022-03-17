const {deletePostDB} = require('../../database/queries/queryContent');
const {customErr} = require('../../errors');

const deletePost = (req, res) => {
  // eslint-disable-next-line camelcase
  const {post_id} = req.params;
  const {id} = req;

  deletePostDB(post_id, id)
      .then((data) => {
        if (data.rowCount === 0) {
          res.json({message: 'deleted'});
        } else {
          res.json({message: 'not deleted'});
        }
      })
      // eslint-disable-next-line max-len
      .catch((err) => err.details ? next(customErr('Something Wrong', 409)) : next(err));
};

module.exports = {deletePost};
