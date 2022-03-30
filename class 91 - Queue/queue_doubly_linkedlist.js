//   <--[2]-->
class node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


// null<--[1]--> <--[2]-->[3] --> <--[4]-->  [5]
//         head                      tail


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addToEnd(data){
        let newNode = new node(data);
        if(this.head === null){
            // it means linkedlist is empty
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            // i should ends
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;

    }

    removeFront(){
        let ele;
        if(this.head === null){
            throw "linkedlist is empty";
        }
        else if(this.head === this.tail){
            ele = this.head.data;
            this.head = null;
            this.tail = null;
        }
        else{
            ele = this.head.data;
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return ele;
    }

    getTop(){
        if(this.head === null){
            throw "linkedlist is empty";
        }
        else{
            return this.head.data;
        }
    }

// Display is O(n)
    display(){
        let temp = this.head;
        while(temp != null){
            console.log(temp.data + " --> ");
            temp = temp.next;
        }
    }


}


class queue{
    constructor(){
        this.que = new DoublyLinkedList();
        this.size = 0;
    }

    // time for enqueue O(1)
    enqueue(ele){
        this.que.addToEnd(ele);
        this.size++;
    }


    dequeue(){
        // O(1)
        if(!this.isEmpty()){
            // shift
            let ele = this.que.removeFront();
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
            return this.que.getTop();
        }
        else{
            throw "queue is empty";
        }
    }

    display(){
        this.que.display();
    }

}

let q = new queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.display();
console.log(q.dequeue());
q.display()


