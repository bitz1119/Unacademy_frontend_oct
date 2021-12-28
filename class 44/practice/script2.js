function multiple(y){
    function multiply(x){
        console.log(x*y);
    }
    return multiply;
}

function multiply(x,y){
    console.log(x*y);
}

multiply(10,20)


multiple(10)(20)
let something = multiple(100,20);



let multiplyBy3 = multiple(3);
multiplyBy3(100);


