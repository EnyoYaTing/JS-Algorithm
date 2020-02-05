/* Binary Tree */

// define a node for a tree
class Node {
    constructor(value) {
        this.value= value,
        this.left = null,
        this.right = null
    }
}

class BinarySearchTrees {
    constructor() {
        this.root = null
    }

    insertNode(value) {
        let node = new Node(value); 

        // If the root is empty, set new node as the root
        if (this.root == null) {
            this.root = node;
        } 
        else {
           this.insertNode(this.root, node); 
        }
    }

    // helper function -- recusive
    insertNodeHelper(root, node) {
        // go left if node's value smaller than root
        if (node.value < root.value) {
            //check left child is null or not
            if (node.left == null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            // go right if node's value greater than root
            // check right child is null or not
            if (!node.right) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }
    
    //remove a node
    removeNode(value) {
        
    }
}



