function verify_submission(){
    if(!isValidUsername()){
        setErrorLabel("Please enter a username with 8 or more characters!");
    } else if(!isValidEmail()){
        setErrorLabel("Please enter a email that ends with @gmail.com!");
    } else if(!isValidPassword()){
        setErrorLabel("Password must be filled and match confirm password!");
    } else if(!isValidCity()){
        setErrorLabel("Please enter a city!");
    } else if(!isValidAddress()){
        setErrorLabel("Please enter an address with 5 or more characters!");
    } else {
        setErrorLabel("");
        alert("Registered!");
    }
}

function setErrorLabel(message){
    const errorLabel = document.getElementById('error');
    errorLabel.innerHTML = message;
}

function isValidUsername(){
    const username = document.getElementById('username').value;

    return username.length >= 8;
}

function isValidEmail(){
    const email = document.getElementById('email').value;

    return email.endsWith('@gmail.com');
}

function isValidPassword(){
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirm_password').value;

    return pass === confirm && pass.length > 0;
}

function isValidCity(){
    const city = document.getElementById('city').value;
    
    return city.length > 0;
}

function isValidAddress(){
    const address = document.getElementById('address').value;

    return address.length >= 5;
}