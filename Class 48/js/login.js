let luser = document.getElementById("luser");
let lpassword = document.getElementById("lpassword");
let suser = document.getElementById("suser");
let spassword = document.getElementById("spassword");

let loginDiv = document.getElementById("login-div");
let signUpDiv = document.getElementById("signup-div");


function loginFn(){
    let username = luser.value;
    let password = lpassword.value;
    if(username=="" || password==""){
        alert("Empty username or password");
    }
    else{
        login(username,password);
    }
}

function login(username,password){
    let loginObj = {
        username: username,
        password: password
    }
    fetch("http://13.235.87.215:4000/api/v1/user/login",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(loginObj)
        }
    ).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        if(data.success==true){
            localStorage.setItem("user",data.data.username);
            localStorage.setItem("userid",data.data.userId);
            console.log("login successful");
            //redirect to index.html
            window.location.href = "index.html";
        }
        else{
            alert("invalid id or password");
        }
    })
}


function signUpFn(){
    let username = suser.value;
    let password = spassword.value;
    if(username=="" || password==""){
        alert("Empty username or password");
    }
    else{
        signUp(username,password);
    }
}

async function signUp(username,password){
    let signUpObj = {
        username: username,
        password: password
    }
    console.log(signUpObj)
    let response = await fetch("http://13.235.87.215:4000/api/v1/user/signup",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(signUpObj)
        }
    );
    
    console.log(response);
    let data = await response.json();
    console.log(data);
    if(data.success==true){
        localStorage.setItem("user",data.data.username)
        alert("signUp Successful");
        makeLoginVisible();
    }
    else{
        alert(data.msg);
    }

}







function makeLoginVisible(){
    signUpDiv.style.display = "none";
    loginDiv.style.display = "";
}

function makeSignUpVisible(){
    signUpDiv.style.display = "";
    loginDiv.style.display = "none";
}