var twoSum = function(nums, target) {
    
    let exist = {};
    for(let i=0;i<nums.length;i++){
        exist[nums[i]] = i;
    }
    
    
    for(let i=0;i<nums.length;i++){
        if(exist[target-nums[i]] != undefined && exist[target-nums[i]] != i){
            return [i,exist[target-nums[i]]]
        }
    }
    return undefined;
    
};

