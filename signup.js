function validation(){
    var user = document.getElementById('form2Example17').value;
    var email = document.getElementById('form2Example07').value;
    var password = document.getElementById('form2Example27').value;
    var conpass = document.getElementById('form2Example37').value;

    if(user == ""){
        document.getElementById('username').innerHTML = "Please fill the username field";
        return false;
    }
    

    else if(email ==""){
        document.getElementById('username').innerHTML = "";
        document.getElementById('email').innerHTML = "Please fill the email field";
        return false;
    }


    else if(password == ""){
        document.getElementById('email').innerHTML = "";
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
            window.location.href = 'login.html';

        }
    
}
}