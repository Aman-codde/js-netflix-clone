let signupBtn = document.getElementById('signup-btn');
let emailInput = document.getElementById('email-input');
let formDiv = document.querySelector('.signup-form');

function createAccount(){
    let buttonText = "";
    let passwordInput="";
    
    signupBtn.addEventListener('click',() => {
        // if the 'Get Started' button is clicked
        if(signupBtn.textContent === 'Get Started >'){
            buttonText = 'Create Account';
            //validation for empty input
            if(emailInput.value === ""){
                alert("email should not be empty");
                return;
            }
            //check if email already exists
            let emailExists = localStorage.getItem(emailInput.value);
            if(emailExists){
                alert('email already exists. please sign in');
                emailInput.value = "";
                return;
            }

            // add email to localStorage
            localStorage.setItem('email',emailInput.value);
            emailInput.value = "";
            //remove email input and add password input at same location
            formDiv.removeChild(emailInput);
            passwordInput = document.createElement('input');
            passwordInput.placeholder = 'Enter password';
            passwordInput.id = 'password-input';
            formDiv.insertBefore(passwordInput,formDiv.childNodes[0]);
        }
        // if the 'Create Account' button is clicked
        if(signupBtn.textContent === 'Create Account'){
            //validation for empty input
            if(passwordInput.value === ""){
                alert("password should not be empty");
                return;
            }
    
            buttonText = 'Get Started >';
            let email = localStorage.getItem('email');
            localStorage.removeItem('email');
            // add {email(as key): password(as value)} to localStorage
            localStorage.setItem(`${email}`,passwordInput.value);
            alert("Account created Successfully");
            passwordInput.value="";
            //remove password input and add email input at same location
            formDiv.removeChild(passwordInput);
            formDiv.insertBefore(emailInput,formDiv.childNodes[0]);
        }

        signupBtn.textContent = buttonText;
    })  
}

createAccount();
