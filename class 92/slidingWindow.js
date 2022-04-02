// let arr  = [1,3,-1,-3,5,3,6,7]
let arr = [1,2,3,1,4,5,2,3,6]
let k = 3;

//O(n2) solution
// for (let index = 0; index <= arr.length-k; index++) {
//     console.log(findMax(arr,index,index+k));
// }


// function findMax(arr,start,end) {
//     let max = arr[start];
//     for (let i = start; i < end; i++) {
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }



// O(n) Solution
let q = []
for (let i = 0;i<k;i++){
    while(q.length > 0 && arr[q[q.length-1]]<arr[i]){
        q.pop();
    }
    q.push(i);
}
console.log(arr[q[0]])

for(let i = 1;i<=arr.length-k;i++){
    if(q[0] < i){
        q.shift();
    }
    while(q.length > 0 && arr[q[q.length-1]]<arr[i+k-1]){
        // console.log("top element in queue is less " + arr[q[q.length-1]] +" < "+arr[i+k-1])
        q.pop();
    }
    q.push(i+k-1);
    console.log(arr[q[0]]);
}



