// https://leetcode.com/problems/two-sum


var findX = (nums,target,j) => {
    // O(n) time taken here
    return nums.indexOf(target,j);
}

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        // if index is found return index otherwise return -1
        let secondIndex = findX(nums,target-nums[i],i+1);
        if(secondIndex != -1){
            return [i,secondIndex];
        }
    }
    return undefined;
    
};
