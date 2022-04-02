let stream = "abcacacb";
let alpha = "abcdefghijklmnopqrstuvwxyz";
let frequency = {};
for (let index = 0; index < alpha.length; index++) {
    const element = alpha[index];
    frequency[element] = 0;
}   

let q = [];

for (let i = 0; i < stream.length; i++) {
    let char = stream.charAt(i);
    frequency[char]++;
    if(frequency[char] == 1){
        q.push(char);
    }
    while(q.length > 0 && frequency[q[0]]>1){
        q.shift();
    }
    if(q.length == 0){
        console.log(-1);
    }
    else{
        console.log(q[0]);
    }
}






