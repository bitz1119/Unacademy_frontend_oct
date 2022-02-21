function abc(num1,num2){
    return this.hello + num1+num2;
}

let obj = {
    hello:"hello",
    b:"b"
}

abc1 = abc.bind(obj)
// console.log(abc1())
console.dir(abc1)

console.log(abc.call(obj,10,20))
console.log(abc.apply(obj,[10,20]))
