// Name and Password from the register-form
var email = document.getElementById('email');
var password = document.getElementById('password');
var fullName = document.getElementById('fullName');


// storing input from register-form
function store() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var fullName = document.getElementById('fullName');


    localStorage.setItem('fullName', fullName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

    console.log("Name: " + fullName.value);
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);


}




// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('fullName');
    var storedPw = localStorage.getItem('password');
    var storedEmail = localStorage.getItem('email');

    // entered data from the login-form
    var loginEmail = document.getElementById('loginEmail');
    var loginPassword = document.getElementById('loginPassword');

    // check if stored data from register-form is equal to data from login form
    if(loginEmail.value == storedEmail && loginPassword.value == storedPw) {
        alert("Welcome " + storedName);
        toggle_visibility('mainPage');
    }else {

        alert("Error");
    }
}

function logOut(){
    localStorage.clear();
    toggle_visibility('loginPage');
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}
