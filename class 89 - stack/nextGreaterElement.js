// Search on leetcode for submitions

let arr = [2,7,3,5,4,6,8]
let ans = new Array(arr.length).fill(-1);

// brute force algorithm
// for(let i = 0;i<arr.length;i++){
//     for(let j = i+1;j<arr.length;j++){
//         if(arr[j] > arr[i] ){
//             ans[i] = arr[j];
//             break;
//         }
//     }
// }

// optimized algorithm
// Step 1 Reverse array
class Stack{
    constructor(...args) {
        // this array will be storing all element of stack
        this.arr = args;
        // top will be storing the index of last element
        this.top = this.arr.length-1;
    }

    push(element) {
        this.arr.push(element);
        this.top++;
    }

    pop(){
        // if there is something to pop/remove
        if(!this.isEmpty()){
            let ele = this.arr.pop();
            this.top--;
            // returning element just poped            
            return ele;
        }
        //if no element to pop return null
        throw new Error("stack is empty");
    }

    isEmpty() {
        return (this.arr.length == 0);
    }

    display(){
        console.log(this.arr)
    }

    getTop(){
        if(!this.isEmpty()){
            return this.arr[this.top];
        }
    }
}


// O(n)
let stack = new Stack();
arr.reverse();
for(let i = 0;i<arr.length;i++){
    // keep pop stack untill you get number greater than arr[i]
    while(stack.isEmpty() === false && stack.getTop() < arr[i]){
        stack.pop();
    }
    // if stack is empty
    if(stack.isEmpty() === true){
        ans[i] = -1;
    }
    else{
        ans[i] = stack.getTop();
    }
    stack.push(arr[i]);
}


console.log(ans);
console.log(ans.reverse());