function validate(){

    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;


    if(userName=="" || password == ""){
        alert("complete the inputs");
    }
    else if(userName=="userName" && password=="password"){
        alert("Login Successful");
    }
    else{
        alert("wrong password");
    }
}