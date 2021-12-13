
function sumOfDigit(num){
    let sum = 0;
    while(num >0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

function reverse(input1, input2){
    // nagetive => sort a before b
    // 0 keep the same order
    // +ve sort b before a
    let a = sumOfDigit(input1);
    let b = sumOfDigit(input2);
    return a-b;
}


let arr = [19 ,90 ,13 ,11 ,4 ,54 ,27]
arr.sort(reverse)
arr.reverse()
console.log(arr)

// sort in decreasing order 
// 7,5,22,3,111,1




