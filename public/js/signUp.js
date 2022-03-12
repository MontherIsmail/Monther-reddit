const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector(".form");
const error = document.querySelector(".error");

form.addEventListener("submit", (ele) => {
  ele.preventDefault();
  userData = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  fetch("/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.redirect) {
        window.location = "/home.html";
      } else {
        error.textContent = data.msg;
      }
    });
});
