const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    fetch('/logout',)
    .catch(err => console.log(err));
})