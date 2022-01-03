function getVideo(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let err = true;
            if(!err){
                resolve("rejected");
            }
            else{
                reject();
            }
        },2000);
    })

}


// getVideo().then((rejected)=>{
//     console.log("Hey I am resolved");
// }).catch(()=>{
//     console.log("Hey I am rejected");
// })






  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//   }
  
//   asyncCall();




async function fetchJoke(){
    let response = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
    console.log(response);
    let data = await response.json();
    console.log(data.joke);
}

fetch("https://geek-jokes.sameerkumar.website/api?format=json")
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
    })


fetchJoke()



