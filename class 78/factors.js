
// let n = 100;
// for(let i =1;i*i<=n;i++){
//     if(n%i==0){
//         if(i*i == n){
//             console.log(i);
//         }
//         else{
//             console.log(i);
//             console.log(n/i);
//         }
//     }
// }

let count = 0;
let n = 9;
for(let i =1;i*i<=n;i++){
    if(n%i==0){
        if(i*i == n){
            count++;
        }
        else{
            count += 2; 
        }
    }
}

if(count>2){
    console.log("not prime");
}
else{
    console.log("prime");
}
