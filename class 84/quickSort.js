

function partition(arr,start,end){
    let pivot = arr[end];
    let last = end;
    end--;

    while(start < end){   
        // finding element that should go to right
        while(arr[start] < pivot && start < end){
            start++;
        }

        // finding element to swap with i
        while(arr[end]>pivot && start < end){
            end--;
        }
        if(start < end){
            //swapping
            let temp = arr[end];
            arr[end] = arr[start];
            arr[start] = temp;
        }
    }

    let temp = arr[last];
    arr[last] = arr[end];
    arr[end] = temp;
    return end;
}


function quickSort(arr,start,end){
    if(start >= end){
        return;
    }
    else {
        // find partition
        let index = partition(arr,start,end);
        // do the quickSort left of partition
        quickSort(arr,start,index-1);
        // do the quick sort right of partition
        quickSort(arr,index+1,end);
    }
}


let arr = [50, 40, 30, 60, 10, 20, 100, 45, 1 , 5, 3]
quickSort(arr,0,arr.length-1);
console.log(arr)
