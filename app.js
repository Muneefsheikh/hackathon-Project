const Auth = firebase.auth()
const database = firebase.database()

//set up for signup function
function signup() {

//get all input fields
let username = document.getElementById("username").value
let email = document.getElementById("email").value
let Passwrod = document.getElementById("pass").value
let ConfirmPAssword = document.getElementById("confpass").value

if (!email.endsWith("@gmail.com")) {
    message.innerText = `Invalid email address`;
    message.style.display = "block";
    message.style.color = "#e55865";
    return;
}
}

//PASS check
function validate_password(Passwrod){
    if (Passwrod < 6) {
        return false
    } else {
        return true
    }
}