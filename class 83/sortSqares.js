/**
 * @param {number[]} nums
 * @return {number[]}
 */

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


var sortedSquares = function(nums) {
    // solution 1 O(nlogn)
    // find the sqares
//     let arr1 = nums.map((ele)=>{return ele*ele});
//     // sort them
//     arr1.sort((a,b)=>{return a-b});
//     return arr1;
    
    
    // O(n)
    let positiveindex = nums.length;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=0){
            positiveindex = i;
            break;
        }
    }
    
    let arr1 = nums.slice(0,positiveindex);
    let arr2 = nums.slice(positiveindex);
    
    
    // reverse arr1
    arr1.reverse();
    for(let i=0;i<arr1.length;i++){
        arr1[i] = Math.abs(arr1[i]);
    }
    
    console.log(arr1)
    console.log(arr2)
    
    // merge arr1 and arr2
    let arr3 = merge(arr1,arr2);
    return arr3.map((ele)=>ele*ele);

};

