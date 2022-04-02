let stream = "abcacacb";
let alpha = "abcdefghijklmnopqrstuvwxyz";
let frequency = {};
for (let index = 0; index < alpha.length; index++) {
    const element = alpha[index];
    frequency[element] = 0;
}   

for (var i = 0; i < stream.length; i++) {
    let ans = -1;
    frequency[stream[i]]++;    
    for (var j = 0; j <= i;j++){
        if(frequency[stream[j]] == 1){
            ans = stream[j];
            break;
        }
    }
    console.log(ans);
}


