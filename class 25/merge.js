
function merge(arr1, arr2){
    let ans = [];
    let i = 0, j = 0, k = 0;
    while(i < arr1.length && j <arr2.length){
        if(arr1[i]<=arr2[j]){
            ans[k] = arr1[i];
            k++;
            i++;
        }
        else{
            ans[k] = arr2[j];
            k++;
            j++;
        }
    }
    while(i < arr1.length){
        ans[k] = arr1[i];
        k++;
        i++;
    }
    while(j < arr2.length){
        ans[k] = arr2[j];
        k++;
        j++;
    }
    return ans;
}



console.log(merge([1,2,5,6,8,9,10],[1,3,4,5,100]));