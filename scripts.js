const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const button = document.querySelector("#submit-button")
const form = document.querySelector("#sign_up_form")
const fields = document.querySelectorAll("input")

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
        alert("Passwords must match!");
    } else {
        if(confirmPassword.classList.contains('password-mismatch') &&
            password.classList.contains('password-mismatch')) {
            password.classList.remove('password-mismatch');
            confirmPassword.classList.remove('password-mismatch');
        }
        console.log(formIsValid())
        if(formIsValid()) {
            form.submit();
        } else {
            alert("Please enter all form data correctly.")
        }
    }
}

button.addEventListener("click", submitForm);