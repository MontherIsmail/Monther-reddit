const { getUserOfPostDB, deletePostDB } = require("../database/queries");

const deletePost = (req, res) => {
  const { post_id } = req.params;
  const { id } = req;

  deletePostDB(post_id, id)
    .then((data) => {
      if (data.rowCount === 0) {
        res.json({ message: "deleted" });
      } else {
        res.json({ message: "not deleted" });
      }
    })
    .catch((err) => console.log(err));
};

module.exports = { deletePost };
