
// merging 2 sorted array
function merge(arr1,arr2){
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



function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = arr.length/2;
    let arr1 = mergeSort(arr.slice(0,mid));
    let arr2 = mergeSort(arr.slice(mid));
    return merge(arr1,arr2);
}


console.log(mergeSort([2,5,6,7,8,1,2,4,5,-1,-4,-7,6]))


