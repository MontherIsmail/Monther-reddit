const upVote = document.querySelector("#down-vote");

upVote.addEventListener("click", (ele) => {
  ele.preventDefault();
  console.log("here");
  fetch("/upvote", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
