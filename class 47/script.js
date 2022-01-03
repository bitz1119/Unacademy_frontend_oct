// function sum(num1,...nums){
//     console.log(nums);
// }


// sum(1,2,3,4,5,6,7,8,9);

// console.log("Hello 0");
// setTimeout(()=>{
//     console.log("Hello 1");
// },2000);

// console.log("Hello 2");


function disPlayer(something){
    document.getElementById("demo").innerHTML = something;
}

function calculator(displayer,...inputs){
    // sum of all inputs values  
    let ans = inputs.reduce((sum,ele)=>sum*ele) ;
    displayer(ans);

}

calculator(disPlayer,1,2,3,4,5,6)
// let inputs = [1,2,3,4,5]
// console.log();

// function reducer(sum,ele){
//     console.log(sum + " " +ele);
//     return sum*ele;
// }






