
// https://leetcode.com/problems/merge-sorted-array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(arr1, m, arr2, n) {
    let arr3 = new Array(m + n);
    let pointer1 = 0;
    let pointer2 = 0;

    for(let i=0;i<arr3.length;i++){
        // arr1[pointer1] in undefined
        if(pointer1 === m){
            arr3[i] = arr2[pointer2];
            pointer2++;
        }
        // arr2[pointe2] is undefined
        else if(pointer2 === n){
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
    for(let i=0;i<arr3.length;i++){
        arr1[i] = arr3[i];
    }

};