const postsContainer = document.querySelector(".posts-container");
const userName = document.querySelector("#cookie");

const getCookie = (cname) => {
  const name = `${cname}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

if (!getCookie("name")) {
  window.location = "../html/login.html";
} else {
  userName.textContent = getCookie("name");
  fetch("/renderhome")
    .then((res) => res.json())
    .then((posts) => {
        console.log(44444, posts);
        posts.forEach((postData) => {
        console.log(555555555, postData);
        const post = document.createElement("div");
        const topDown = document.createElement("div");
        const upButton = document.createElement("button");
        const upImg = document.createElement("img");
        const vote = document.createElement("p");
        const downButton = document.createElement("button");
        const downImg = document.createElement("img");
        const mainPost = document.createElement("div");
        const postInfo = document.createElement("div");
        const infoImg = document.createElement("img");
        const userName = document.createElement("h5");
        const joinButton = document.createElement("button");
        const postBody = document.createElement("div");
        const postFooter = document.createElement("div");
        const postText = document.createElement("p");
        const comments = document.createElement("button");
        const share = document.createElement("button");
        const save = document.createElement("button");

        postsContainer.appendChild(post);
        post.appendChild(topDown);
        topDown.appendChild(upButton);
        upButton.appendChild(upImg);
        topDown.appendChild(vote);
        topDown.appendChild(downButton);
        downButton.appendChild(downImg);
        post.appendChild(mainPost);
        mainPost.appendChild(postInfo);
        mainPost.appendChild(postBody);
        mainPost.appendChild(postFooter);
        postInfo.appendChild(infoImg);
        postInfo.appendChild(userName);
        postInfo.appendChild(joinButton);
        postBody.appendChild(postText);
        postFooter.appendChild(comments);
        postFooter.appendChild(share);
        postFooter.appendChild(save);

        post.setAttribute("class", "post");
        topDown.setAttribute("class", "top-down");
        upButton.setAttribute("id", "up-vote");
        upImg.setAttribute("alt", "Top");
        downImg.setAttribute("alt", "down");
        downImg.setAttribute("class", "rotate");
        mainPost.setAttribute("class", "main-post");
        postInfo.setAttribute("class", "post-info");
        infoImg.setAttribute("alt", "Info Image");
        postBody.setAttribute("class", "post-body");
        postFooter.setAttribute("class", "post-footer");
        comments.setAttribute("class", "comments");
        share.setAttribute("class", "share");
        save.setAttribute("class", "save");

        upImg.src = "../assets/top.png";
        downImg.src = "../assets/top.png";
        infoImg.src = "../assets/user-img.png";

        vote.textContent = postData.vote;
        userName.textContent = postData.name;
        joinButton.textContent = "Delete";
        postText.textContent = postData.text;
        comments.textContent = "Comments";
        share.textContent = "share";
        save.textContent = "save";
      });
    })
    .catch((err) => console.log(err));
}
