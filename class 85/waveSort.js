let arr = [4,3,1,8]

function waveSort(arr){
    for (let i = 1; i < arr.length; i=i+2) {
        if(arr[i-1]<arr[i]){
            // swap
            let temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
        if(i+1 < arr.length && arr[i+1]<arr[i]){
            //swap
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
    }
    console.log(arr);
}

waveSort(arr)