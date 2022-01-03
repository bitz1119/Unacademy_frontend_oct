'use strict';


process.stdin.resume();
process.stdin.setEncoding('utf8');


let inputString = '';
let currentLine = 0; 
// your code goes here
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
 
    main();
});
 
function readLine() {
    return inputString[currentLine++];
}

function main(){
    let [a,b,c] = readLine().split(" ").map((element)=>{
        return parseInt(element);
    });
    
    console.log(a + b + c)
    
    let x = parseInt(readLine());
    console.log(x)
    let y = parseInt(readLine());
    console.log(y)
    let z = parseInt(readLine());
    console.log(z)

}
 



