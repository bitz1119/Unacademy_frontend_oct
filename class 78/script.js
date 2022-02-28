let i=1;
let n = 1000;
while(i*i < n){
    i++;
}

if(i*i == n){
    console.log("ans is "+i);
}
else{
    console.log("ans is "+(i-1));
}
