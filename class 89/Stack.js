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


const stack = new Stack();
stack.push(100)
stack.push(200)
stack.push(300)
stack.display();


let eleToBePushedAtBottom = 400;
// pop all the elements from stack to tempStack
const tempStack = new Stack();
while(stack.isEmpty()==false){
    let ele = stack.pop();
    tempStack.push(ele);
}


// push all the elements from tempstack to stack
stack.push(eleToBePushedAtBottom);
while(tempStack.isEmpty()==false){
    let ele = tempStack.pop();
    stack.push(ele);
}

// stack.display();





// valid parthanthesis
// let str = "{({})}((())())"
let str = "{({}()[])}"
let paraStack = new Stack();
let ans = false;
for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if(element === "{" || element === "[" || element === "("){
        paraStack.push(element);
    }
    if(element === "}" || element === "]" || element === ")"){
        if(paraStack.isEmpty()){
            ans= false;
            break;
        }
        else if(element === ")"){
            if(paraStack.getTop() !== "("){
                ans = false;
                break;
            }
        }
        else if(element === "]"){
            if(paraStack.getTop() !== "["){
                ans = false;
                break;
            }
        }
        else if(element === "}"){
            if(paraStack.getTop() !== "{"){
                ans = false;
                break;
            }
        }
        paraStack.pop();
    }
    if(paraStack.isEmpty()){
        ans = true;
    }
}


console.log(ans);
