
let arr = [4,5,6,1,2,4,6,7,8,9,10,2,3,5,6,8,1,2,4,5,5]

arr.sort((a,b)=>{return a-b})


//binary search 7

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] < target){
            start = mid+1;
        }
        else if(arr[mid]>target){
            end = mid-1;
        }
        else if(arr[mid] === target){
            return mid;
        }
    }
}

console.log(arr)
console.log(binarySearch(arr,7))

