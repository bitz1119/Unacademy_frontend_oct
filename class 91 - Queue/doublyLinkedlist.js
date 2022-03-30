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


export class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addToEnd(data){
        let newNode = new node(data);
        if(head === null){
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


    display(){
        let temp = this.head;
        while(temp != null){
            console.log(temp.data + " + ");
        }
    }


}