let arr = [1,2,3,4,5]
for(let k = 0; k<arr.length; k++)
{
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    console.log(arr)
}



