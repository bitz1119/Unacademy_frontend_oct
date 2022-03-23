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
        return null;
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
stack.pop();
stack.display();
console.log(stack.isEmpty())
console.log(stack.getTop())



