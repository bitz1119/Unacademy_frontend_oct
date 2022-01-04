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
            console.log("login successful")
        }
    })
}

signUp("111","111")
// login("11","11");
