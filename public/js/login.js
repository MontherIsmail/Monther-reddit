const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('.form');

form.addEventListener('submit', (ele) => {
    ele.preventDefault();
    const userData = {
        email    : emailInput.value,
        password : passwordInput.value
    };
    fetch('/login', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        console.log('data',data);
        if(data.redirect){
            window.location = './home.html';
        }else{
            swal( 'error',data.message ,'error');
        }
    })
})
