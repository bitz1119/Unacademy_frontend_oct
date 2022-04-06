class node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    addNode(data, ...path){
        let newNode = new node(data);
        if(path.length == 0){
            this.root = newNode;
        }
        else{
            let temp = this.root;
            for(let i = 0; i < path.length-1; i++){
                if(path[i] == 'l'){
                    temp = temp.left;
                }
                else{
                    temp = temp.right;
                }
            }
            if(path[path.length-1] == "l"){
                temp.left = newNode;
            }
            else{
                temp.right = newNode;
            }
        }
    }

    preorder(parent=this.root){
        // base case
        if(parent == null){
            return;
        }
        console.log(parent.data);
        this.preorder(parent.left);
        this.preorder(parent.right);
    }

    inorder(parent=this.root){
        // base case
        if(parent == null){
            return;
        }
        this.inorder(parent.left);
        console.log(parent.data);
        this.inorder(parent.right);
    }

    //write the code for post orders
    postOrder(parent=this.root){
        // base case
        if(parent == null){
            return;
        }
        this.postOrder(parent.left);
        this.postOrder(parent.right);
        console.log(parent.data);
    }

    levelOder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length != 0){
            let node = queue.shift();
            console.log(node.data);
            if(node.left != null){
                queue.push(node.left);
            }
            if(node.right != null){
                queue.push(node.right);
            }
        }
    }
}
let bt = new BinaryTree();
bt.addNode(10)
bt.addNode(20,"l")
bt.addNode(70,"r")
bt.addNode(30,"l","l")
bt.addNode(40,"l","r")
bt.addNode(50,"r","l")
bt.addNode(60,"r","r")

bt.levelOder();