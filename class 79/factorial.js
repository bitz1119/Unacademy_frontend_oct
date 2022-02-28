function factorial(n){
    if(n==0){
        return 1;
    }

    let x = factorial(n-1);
    return n * x;

}


console.log(factorial(5));


