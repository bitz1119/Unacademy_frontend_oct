function maxArray(arr, left, right){
    if(left == right){
        return arr[left];
    }
    else{
        let mid = Math.floor((left+right)/2);
        let leftMax = maxArray(arr,left,mid);
        let rightMax = maxArray(arr,mid+1,right); 
        return Math.max(leftMax,rightMax);
    }
}

console.log( maxArray([4,3,2,5],0,3) );





