
let arr = [4,5,6,1,2,4,6,7,8,9,10,2,3,5,6,8,1,2,4,5,5]

arr.sort((a,b)=>{return a-b})


//binary search 7

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] < target){
            start = mid+1;
        }
        else if(arr[mid]>target){
            end = mid-1;
        }
        else if(arr[mid] === target){
            return mid;
        }
    }
}

// if arr is not sorted
function globalLinearSearch(arr,target){
    let ans = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            ans.push(i);
        }
    }
    return ans;
}

// console.log(arr)
// console.log(binarySearch(arr,7))



// arr is sorted , global search 
// if arr is sorted all the target consecutive
// 1 2 3 5 7 7 7 7 7 7 
// first occuence and last occurence

// main hw
// wap that find first occuence of any number in sorted array - lower_bound
// wap that find last occuence of any number in sorted array - upper_bound



function firstOccuence(arr,target){
    let start = 0;
    let end = arr.length-1;
    let ans = -1;
    let iter = 0;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] < target){
            start = mid+1;
        }
        else if(arr[mid]>target){
            end = mid-1;
        }
        else if(arr[mid] === target){
            ans = mid;
            end = mid-1;
        }
        if(iter > 10){break;}
        iter++;
        console.log(mid);
        
    }
    return ans;

}

// console.log(firstOccuence([1,1,1,1,1,1,2,3,4,5,5,5,5,5,6,7,8,9],5))


// complexity - 
function sqrt(target){
    let start = 0;
    let end = target;
    let ans = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(mid*mid < target){
            ans = mid
            start = mid+1;
        }
        else if(mid*mid>target){
            end = mid-1;
        }
        else if(mid*mid === target){
            ans = mid;
            return ans;
        }
        
    }
    return ans;
}

console.log(sqrt(50))
