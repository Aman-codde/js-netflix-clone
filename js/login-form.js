function signin(event){
    event.preventDefault();
    // console.log("super o super")
var email = document.getElementById("email_id");
var pass= document.getElementById("pwd");

// var user = {
//     email:email,
//     password:pass,
// };

// var json = JSON.stringify(user);
localStorage.setItem("email_id",email.value);
localStorage.setItem("pwd",pass.value);

// console.log("signin completed")

// let emailExists = localStorage.getItem("email",value);
//             if(emailExists){
//                 alert('email already exists. please sign in');
//                 email.value = "";
//                 return;
//             }


}