    let email = document.getElementById("email");
    let pass= document.getElementById("password");
let signinBtn = document.getElementById("signin");

  signinBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let emailVal = email.value.trim();
    let password = pass.value.trim();
    let emailExists = localStorage.getItem(emailVal);
    if (emailExists !== null) {
      if (password === emailExists) {
        localStorage.setItem('logged_user',emailVal);
        window.location.href = 'categories.html';
      } else {
        alert("password does not match");
      }
    } else {
      alert("email does not exists. please enter the correct email");
    }
  })


