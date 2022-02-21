

// fumction that returns bultiply by A


// multiplyByA(2)
//     -- return function
//     function(x) => x*2


// multiplyByA(5)
//     -- return function
//     function(x) => x*5


function multiplyByA(a){
    let num1 = a;
    return function(b){
        return num1*b;
    }
}

let multiplyBy2 = multiplyByA(2);
let multiplyBy3 = multiplyByA(3);
console.log(multiplyBy2(100))
console.log(multiplyBy3(100))
console.dir(multiplyBy2)
console.dir(multiplyBy3)

