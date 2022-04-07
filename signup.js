function validation(){
    var user = document.getElementById('form2Example17').value;
    var phn = document.getElementById('form2Example47').value;
    var password = document.getElementById('form2Example27').value;
    var conpass = document.getElementById('form2Example37').value;

    if(user == ""){
        document.getElementById('username').innerHTML = "Please fill the username field";
        return false;
    }
    else if(!isNaN(user)){
        document.getElementById('username').innerHTML = "Only characters are allowed";
        return false;
    }
    
    else if(phn ==""){
        document. getElementById('phnno').innerHTML = "Please fill the phone number field";
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
        document.getElementById('password').innerHTML = "Please fill the password field";
        return false;
    }
    else if(conpass == ""){
        document.getElementById('password').innerHTML = "";
        document.getElementById('conpassword').innerHTML = "Please fill the confirm password field";
        return false;
    }

    else if(password!=conpass){
        document.getElementById('conpassword').innerHTML = "Both the passwords are not matching";
        return false;
    }

    else{
        document.getElementById('conpassword').innerHTML = "";
        function redirect(){
            window.location.href = './login.html';

        }
    
    }
}