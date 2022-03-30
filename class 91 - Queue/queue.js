class queue{
    constructor(){
        this.que = [];
        this.size = 0;
    }
    enqueue(ele){
        this.que.push(ele);
        this.size++;
    }
    dequeue(){
        // we have remove first element 
        // check if we have element or not
        if(!this.isEmpty()){
            // shift
            let ele = this.que.shift();
            this.size--;
            return ele;

        }
        else{
            throw "queue is empty";
        }
    }
    isEmpty(){
        return this.size === 0;
    }

    front(){
        if(!this.isEmpty()){
            return arr[0];
        }
        else{
            throw "queue is empty";
        }
    }

    display(){
        console.log(this.que);
    }

}

let q = new queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.display();
console.log(q.dequeue());
q.display()