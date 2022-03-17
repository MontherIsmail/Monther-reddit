const {addPostDB} = require('../../database/queries/queryContent');
const {customErr} = require('../../errors');

const addPost = (req, res) => {
  const {value} = req.body;
  // eslint-disable-next-line camelcase
  const user_id = req.id;
  addPostDB(value, user_id)
      .then((data) => res.json({message: 'post added'}))
      // eslint-disable-next-line max-len
      .catch((err) => err.details ? next(customErr('Something Wrong', 409)) : next(err));
};

module.exports = {addPost};
