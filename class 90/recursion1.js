// fib(n) = fib(n-1) + fin(n-2)

function fib(n){

    if(n==0 || n==1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(7))

// power
// pow(n,k) = n * pow(n,k-1);
function power(n){ 
    if(k === 0 ) return 1;
    return n * pow(n,k-1);
}



let arr = [1,2,3,4,5,6,7,8,9,10]

function sumOfArray(index,arr){
    // Option 1     
    // if(arr.length-1 == index){
    //     return arr[index];
    // }
    // option 2 
    if(arr.length == index){
        return 0;
    }
    return sumOfArray(index+1,arr) + arr[index];
}

console.log(sumOfArray(0,arr));





// merge sort recursion function

function merge(arr1,arr2){
    // arr1 length m
    // arr2 length n
    let arr3 = new Array(arr1.length + arr2.length);
    let pointer1 = 0;
    let pointer2 = 0;

    for(let i=0;i<arr3.length;i++){
        // arr1[pointer1] in undefined
        if(arr1[pointer1] === undefined){
            arr3[i] = arr2[pointer2];
            pointer2++;
        }
        // arr2[pointe2] is undefined
        else if(arr2[pointer2] === undefined){
            arr3[i] = arr1[pointer1];
            pointer1++;
        }
        // nothing is undefined
        else{
            if(arr1[pointer1] <= arr2[pointer2]){
                arr3[i] = arr1[pointer1];
                pointer1++;
            }
            else {
                arr3[i] = arr2[pointer2];
                pointer2++;
            }
        }
    }
    return arr3;
}


function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    // divide arr into 2 parts
    let arr1 = arr.slice(0, arr.length/2);
    let arr2 = arr.slice(arr.length/2);
    console.log(arr1)
    console.log(arr2)
    
    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    let arr3 = merge(arr1,arr2);
    return arr3;

}


console.log(mergeSort([8,7,6,5,4,3,2,1]));


