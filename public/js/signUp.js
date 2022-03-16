const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector(".form");


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
      console.log(1111, data);
      if (data.redirect) {
        window.location = "../html/home.html";
      } else {
         swal( 'error',data.message ,'error');
      }
    });
});
