/* Binary Search Tree, reference: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/ */

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

    insert(value) 
    { 
        var newNode = new Node(value); 
                        
        // root is null
        if(this.root === null) {
            this.root = newNode; 
        }
        else {
            this.insertNode(this.root, newNode); 
        }   
    } 
  
    insertNode(node, newNode) 
    { 
        // if the value is less than the node value, go to left of the tree  
        if(newNode.value < node.value) 
        { 
            // if left is null insert node here 
            if(node.left === null) {
                node.left = newNode; 
            }
            else {
                this.insertNode(node.left, newNode); 
            }     
        } 
        // if the data is greater, than go for the right of the tree  
        else
        { 
            // if right is null insert node here 
            if(node.right === null)  {
                node.right = newNode; 
            }  
            else {
                this.insertNode(node.right,newNode); 
            }   
        } 
    } 
    
    //helper method that calls the removeNode with a given data 
    remove(value) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(node, key) {
        // if the root is null - empty tree
        if (node === null) {
            return null;
        }
        // go left child node if the value is smaller than patent
        else if(key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        // go right child node if the value is greater than patent
        else if (key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
         // if data is the same as the root's data then delete this node 
         // node.value === key
        else
        { 
            // deleting node with no children 
            if(node.left === null && node.right === null) 
            { 
                node = null; 
                return node; 
            } 
    
            // deleting node with one children 
            if(node.left === null) 
            { 
                node = node.right; 
                return node; 
            } 
            
            else if(node.right === null) 
            { 
                node = node.left; 
                return node; 
            } 
    
            // Deleting node with two children, go to the right subtree to find the min
            var minRight = this.findMinNode(node.right); 
            node.value = minRight.value; 
    
             // Make sure we remove the node that we replaced the deleted node
            node.right = this.removeNode(node.right, minRight.value)
                return root;
            } 
    }

    
    /**********************/
    /*   Tree Traversal   */
    /**********************/

    // Performs inorder traversal of a tree 
    inorder(node) {
        if (!node) {
            return 'Tree is empty'
        } else {
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
    }

    // Performs preorder traversal of a tree     
    preorder(node) 
    { 
        if(node != null) 
        { 
            console.log(node.value); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        } 
    }

    // Performs postorder traversal of a tree 
    postorder(node) 
    { 
        if(node != null) 
        { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            console.log(node.value); 
        } 
    } 

    /***********************/
    /*    Helper Function  */
    /***********************/

    findMinNode(node) {
        if(node.left === null) {
            return node;
        }
        else {
            return this.findMinNode(node.left);
        }

    }

    //  returns the root node of a tree
    getRootNode() 
    { 
        return this.root; 
    } 
}

// creating a BST
var bst = new BinarySearchTrees();
var num = 55;
// Inserting nodes to the BinarySearchTree 
for(let i=0; i<10; i++) {
    bst.insert(num);
    num = num - 2;
}
var root = bst.getRootNode(); 

bst.remove(37);
console.log(bst.inorder(root)); 
console.log(bst.preorder(root));