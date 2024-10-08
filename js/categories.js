let liLoggedUser = document.getElementById("logged_user");
let aLoggedUser = liLoggedUser.querySelector('a');
const signOutBtn = document.getElementById("sign_out_btn");

console.log(aLoggedUser);
aLoggedUser.innerText = "Welcome, " + localStorage.getItem('logged_user')

signOutBtn.addEventListener('click',(event)=>{
    localStorage.setItem('logged_user','');
    window.location.href = '../index.html';
})