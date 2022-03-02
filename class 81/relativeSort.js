/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

 var relativeSortArray = function(arr1, arr2) {
    let map = {};
    function compare(a,b){
        //4 9
        // 4 will come first because index of 4 in arr2 is less
        // a and b both are present in map
        if(map[a] !== undefined && map[b] !== undefined){
            return map[a] - map[b];   
        }

        // 4 7
        // a is in arr2  but not b
        if(map[a] !== undefined && map[b] === undefined){
            return -1;
        }


        // 7 9
        // a is not in arr2 but b is
        if(map[a] === undefined && map[b] !== undefined){
            return 1;
        }


        //7 19
        // both are not in arr2
        return a - b;
    }
    for(let i = 0;i<arr2.length;i++){
        map[arr2[i]] = i;
    }
    arr1.sort(compare);
    return arr1;
};