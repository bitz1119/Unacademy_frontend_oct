
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
console.log(new Node(10));

// class LinkedList {
//     constructor(){
//         this.head = null;
//     }
//     addnode(data){
//         let node1 = new Node(data);
//         if(this.head == null){
//             this.head = node1;
//         }
//         else{
//             let temp = this.head;
//             while(temp.next != null){
//                 temp = temp.next;
//             }
//             temp.next = node1;
//         }
//     }
//     display(){
//         if(this.head == null){
//             console.log("No nodes are available")
//         }
//         else{
//             let temp = this.head;
//             while(temp != null){
//                 console.log(temp.data + " --> ");
//                 temp = temp.next;
//             }
//         }
//     }
//     // addNodeStart
//     addNodeStart(data){
//         let newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     //addNodeOnIndex -> data, index
//     addNodeOnIndex(data,index){
//         if(index == 0){
//             addNodeStart(data);
//         }
//         else{
//             let currIndex = 0;
//             let temp = this.head;
//             while(currIndex < index-1){
//                 temp = temp.next;
//                 currIndex++;
//             }
//             let newNode = new Node(data);
//             let next = temp.next;
//             temp.next = newNode;
//             newNode.next = next;
//         }
//     }

//     // removeLastNode
//     // go to 2nd last element
//     removeLastNode(){
//         if(this.head == null){
//             return;
//         }
//         if(this.head.next == null){
//             this.head = null;
//         }

//         // go till 2nd last element
//         let temp = this.head;
//         while(temp.next.next != null){
//             temp = temp.next
//         }
//         temp.next = null;
//     }
// }






// let linkedList = new LinkedList();
// linkedList.addnode(1);
// linkedList.addnode(2);
// linkedList.addnode(3);
// linkedList.addnode(4);

// linkedList.display();

// console.log("================================================")
// linkedList.addNodeStart(0);
// linkedList.display();

// console.log("================================================")
// linkedList.addNodeOnIndex(2.5,3);
// linkedList.addNodeOnIndex(3.5,5);
// linkedList.display();

// console.log("================================================")
// linkedList.removeLastNode();
// linkedList.removeLastNode();
// linkedList.display();

// console.log(linkedList);

