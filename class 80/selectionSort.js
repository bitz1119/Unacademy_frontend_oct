
let arr = [3,4,2,1,5,6,1,2,10]
function findMinIndex(arr,i){
    let minIndex = i;
    for(let index = i;index<arr.length;index++){
        if(arr[minIndex] > arr[index]){
            minIndex = index;
        }
    }
    return minIndex;
}


for(let i=0;i<arr.length-1;i++){
    let minIndex = findMinIndex(arr,i);
    // swap with ith index
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr)