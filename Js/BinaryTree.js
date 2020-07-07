class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BTree{

    constructor(){
        this.root = null;
    }

    add = (data) =>{
         
        const node = this.root;

        if(node === null){
            this.root = new Node(data);
            return;
        }else{
            const searchBTree = (node) =>{
                
                if(data < node.data){

                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if( node.left !== null){
                        return searchBTree(node.left);
                    }
                }else if ( data > node.data){
                    if(node.right === null){
                        node.right  = new Node(data);
                        return;
                    }else if(data !== null ){
                        return searchBTree(node.right);
                    }                 
                }else{
                    return null;
                }

            }

            return searchBTree(node);
        }
    };
    
    min = () =>{
        let currentNode = this.root;
        while(currentNode.left){
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }

    max = () =>{
        let currentNode = this.root;
        while(currentNode.right){
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }

    find = (data) =>{
        let currentNode =  this.root;

        while(currentNode.data !== data){

            if(data < currentNode.data){
                currentNode = currentNode.left;
            }else{
                currentNode = currentNode.right;
            }

            if(currentNode === null){
                return null;
            }

        }
        return currentNode;
    }

    isPresent = (data) =>{
        let current = this.root;

        while(current){
            if(current.data === data) return true;
            if( data < current.left){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }
}

const binaryTree = new BTree();
binaryTree.add(2);
binaryTree.add(1);
binaryTree.add(0);
binaryTree.add(4);
binaryTree.add(5);
binaryTree.add(3);
binaryTree.add(2);
binaryTree.add(-2);

console.log("min",binaryTree.min());
console.log("max",binaryTree.max());
console.log("find",binaryTree.find(72));
console.log("ispresent",binaryTree.isPresent(5));