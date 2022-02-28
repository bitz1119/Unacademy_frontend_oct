function printArray(arr,index){
    if(arr.length == index){
        return;
    }

    printArray(arr,index+1);
    console.log(arr[index]);
}


printArray([3,4,5,2,1,7],0);




