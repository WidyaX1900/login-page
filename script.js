const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener("click", () => {
   if(username.value !== 'rangga' && password !== '123'){
        alert('Username dan Password Salah!');
   
    } else {
        alert('Username dan Password Benar');
    }
});