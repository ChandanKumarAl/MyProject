document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    checkData();
});

var username = document.getElementById("username");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");

function checkData() {
    var regName = /^[a-zA-Z]+$/;
    var regexp = /^\S*$/;
    var name = document.getElementById('username').value;
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var pass1Value = pass1.value.trim();
    var pass2Value = pass2.value.trim();

    if (!regName.test(name)) {
        setError(username, "username cannot contain the numberic value");
    }
    else {
        setSuccess(username);
    }

    if (emailValue == "") {
        setError(email, "Email can't be blank");
    }
    else if (!isEmail(emailValue)) {
        setError(email, "Email is not Valid");
    }
    else {
        setSuccess(email);
    }


    if (pass1Value == "") {
        setError(pass1, "Password can't be blank");
    } else {
        setSuccess(pass1);
    }


    if (pass2Value == "") {
        setError(pass2, "Password can't be blank");
        
    }
    else if (pass1Value !== pass2Value) {
        setError(pass2, "Password does not match");
      
    }
    
    
    else {
        setSuccess(pass2);
        window.location.href="../Dashboard/dashboard.html"
    }
    

}



function setError(u, msg) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field error";
    var span = parentBox.querySelector("span");
    var fa = parentBox.querySelector(".fa");
    span.innerText = msg;
    fa.className = "fa fa-exclamation-circle";
    
}

function setSuccess(u) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-check-circle";
}


function isEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}

