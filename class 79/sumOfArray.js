function sumOfArray(arr,index){

    if(index == arr.length){
        return 0;
    }

    let sumOfRemaining = sumOfArray(arr,index+1);
    return sumOfRemaining + arr[index];
}


console.log(sumOfArray([1,2,3,4,5,6,7],0));