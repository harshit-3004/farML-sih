function login_validation(){
    var email = document.getElementById('form2Example17').value;
    var password = document.getElementById("form2Example27").value;

    if(email == ""){
        document.getElementById('email').innerHTML = "Please enter the email field";
        return false;
    }

    else if(password == ""){
        document.getElementById('email').innerHTML = "";
        document.getElementById('password').innerHTML = "Please enter the password field";
    }

    else{
        document.getElementById('password').innerHTML = "";
        document.getElementById('exampleModal').innerHTML = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>Welcome back! Proceed with your crop.</h5><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body'><button type='button' class='btn btn-primary' onclick='window.location.href='./index.html''>Registered Crop</button><br><button type='button' class='btn btn-primary' style='margin-top: 5px;' onclick='window.location.href='./crop registration.html''>New Crop</button></div></div></div>";
        return true;
    }
}