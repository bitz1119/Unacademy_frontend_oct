// function download(callback1){
//     setTimeout(()=>{
//             console.log("downloading.......");
//             callback1()
//         }
//         ,5000)
// }
// function Zipping(callback2){
//     setTimeout(()=>{
//         console.log("zipping......."),
//         callback2();
//     },3000)
// }

// function upload(){
//     setTimeout(()=>{console.log("upload.......")
// },4000)
// }

// download(
//     ()=>{Zipping(()=>{upload()})});




// function validateUser(user){
//     return new Promise((resolve,reject)=>{
//         if(user==="user"){
//             resolve(user); 
//         }
//         else{
//             reject(user);
//         }
//     })
// }


// let promise = validateUser("bittoo")
//                 .then((user)=>{
//                     console.log("user is found")
//                 }).catch(
//                     (user)=>{
//                         console.log(`${user} not found`)
//                     }
//                 )



var users = ["bittoo","hritik"]

function getUsers(user){
    return new Promise((resolve,reject)=>{
        resolve(user);
    })
}

function validateUser(user){
    console.log(users.toString())

    return new Promise((resolve,reject)=>{
        if(doesUserExist(user,users)){
            reject("error msg")
        }
        else{
            console.log("user not found")
            resolve(user);
        }
    })
}

function doesUserExist(user){
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(element === user){
            return true;
        }
        return false;
    }
}

function addUser(user){

    console.log(user)
    return new Promise((resolve,reject)=>{
        users.push(user);
        resolve();
    })
}

// getUsers("ravi")
//     .then(validateUser)
//     .then(addUser)
//     .catch((code)=>{console.log("error "+code)})
//     .finally(()=>{console.log(users.toString())})


    
// async function registerUser(user){
//     let reply1 = await getUsers(user);
//     let reply2 = await validateUser(reply1);
//     let reply3 = await addUser(reply2);
//     console.log(users)
//     console.log(reply3)
// }

// registerUser("hello")

// fetch("https://randomuser.me/api/?&results=15")
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((resJson)=>{
//         console.log(resJson);
//     })



async function getRandomUsers(){
    let response = await fetch("https://randomuser.me/api/?&results=15");
    console.log(response);
    let resJSON = await response.json()
    console.log(resJSON)

}

getRandomUsers()