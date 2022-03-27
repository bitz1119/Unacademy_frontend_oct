class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addNode(data){
        // what if head is null
        if(this.head == null){
            let newNode = new Node(data);
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        // temp is last node 
        let newNode = new Node(data);
        temp.next = newNode;
    }

    // addNodeAtStart
    addNodeAtStart(data){
       
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }


    removeNodeStart(){
        if(this.head == null){
            return;
        }
        this.head = this.head.next;
    }




    display(){
        let linkedListString = "";
        let temp = this.head;
        while(temp != null){
            linkedListString += temp.data + "-->";
            temp = temp.next;
        }
        console.log(linkedListString);
    }

    addOnIndex(data,index){
        // corner case?
        if(index == 0){
            addNodeAtStart(data);
            return;
        }
        let currIndex = 0;
        let temp = temp.next;
        while(currIndex < index-1){
            currIndex++;
            temp = temp.next;
        }

        let newNode = new Node(data);

        newNode.next = temp.next;
        temp.next = newNode;
    }

    

    reverseLinkedList(){
        let prev = null;
        let curr = this.head;
        let nextNode = curr.next;
        while(curr != null){
            curr.next = prev;
            prev = curr;
            curr = nextNode;
            if(nextNode != null){
                nextNode = nextNode.next;
            }
        }
        this.head = prev;
    }

    removeNodeFromLast(){
        if(this.head == null){
            return;
        }
        if(this.head.next == null){
            this.head = null;
            return;
        }
        // find 2nd last element
        let temp = this.head;
        while(temp.next.next != null){
            temp = temp.next;
        }
        // make the secondlast element point to null
        let lastnode = temp.next;
        temp.next = null;
        return lastnode;
    }

    reorderLinkedlist(){
        let temp = this.head;
        while(temp != null && temp.next != null ){
            let lastnode = this.removeNodeFromLast();
            // insert on curr position
            let nextNode = temp.next;
            temp.next = lastnode;
            lastnode.next = nextNode;
            // jump to next.next
            temp = temp.next.next;
        }
    }

    reverseRecursiveInner(currNode){
        
        if(currNode.next == null){
            this.head = currNode;
            return currNode;
        }

        let lastNode = this.reverseRecursiveInner(currNode.next);
        lastNode.next = currNode;
        console.log(lastNode.data+"-->"+lastNode.next.data)
        return currNode;

    }

    reverseRecursive(){
        let temp = this.head;
        this.reverseRecursiveInner(temp);
        temp.next = null;
    }


}

let linkedList = new LinkedList();
linkedList.addNode(10);
linkedList.addNode(20);
linkedList.addNode(30);
linkedList.addNode(40);

linkedList.display();
linkedList.reverseRecursive()
linkedList.display();





var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            return true;
        }
    }
    return false;
    
};