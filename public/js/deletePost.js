const deletePost = (deletePostId) => {
  const post_id = deletePostId;
  fetch(`/deletepost/${post_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(data => location.reload())
  .catch((err) => console.log(err));
};
