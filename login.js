function login_validation(){
    var phn = document.getElementById('form2Example17').value;
    var password = document.getElementById("form2Example27").value;

    if(phn == ""){
        document.getElementById('phnno').innerHTML = "Please enter the Phone number field";
        return false;
    }

    else if(isNaN(phn)){
        document.getElementById('phnno').innerHTML = "User must write digits only, not characters";
        return false;
    }
    else if(phn.length!=10){
        document.getElementById('phnno').innerHTML = "Mobile number must be of 10 digits only";
        return false;
    }

    else if(password == ""){
        document.getElementById('phnno').innerHTML = "";
        document.getElementById('password').innerHTML = "Please enter the password field";
        return false;
    }

    else{
        document.getElementById('password').innerHTML = "";
        // document.getElementById('exampleModal').innerHTML = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>Welcome back! Proceed with your crop.</h5><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body'><button type='button' class='btn btn-primary' onclick='window.location.href='./index.html''>Registered Crop</button><br><button type='button' class='btn btn-primary' style='margin-top: 5px;' onclick='window.location.href='./crop registration.html''>New Crop</button></div></div></div>";
        // return true;
    }
}