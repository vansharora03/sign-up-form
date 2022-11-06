const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const button = document.querySelector("#submit-button");
const form = document.querySelector("#sign_up_form");
const fields = document.querySelectorAll("input");
const confirmPasswordMessage = document.querySelector(".password-mismatch-message");

const formIsValid = function() {
    let foundInvalid = false;
    fields.forEach(function(field) {
        console.log(field.checkValidity());
        if(!field.checkValidity()) {
            foundInvalid = true;
        }
    });
    return !foundInvalid;
}

const submitForm = function() {
    fields.forEach(function(field) {
        field.classList.add('error');
    });
    if (password.value !== confirmPassword.value) {
        password.classList.add('password-mismatch');
        confirmPassword.classList.add('password-mismatch');
        confirmPasswordMessage.textContent = "Please ensure passwords match.";
    } else {
        if(confirmPassword.classList.contains('password-mismatch') &&
            password.classList.contains('password-mismatch')) {
            password.classList.remove('password-mismatch');
            confirmPassword.classList.remove('password-mismatch');
            confirmPasswordMessage.textContent = "";
        }
        console.log(formIsValid())
        if(formIsValid()) {
            form.submit();
        }
    }
}

button.addEventListener("click", submitForm);