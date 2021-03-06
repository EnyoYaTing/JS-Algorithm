/* Linked List in JavaScript, reference to https://www.geeksforgeeks.org/implementation-linkedlist-javascript/ */

// Defining a class of a node
class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

// Defining a class of a Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //add a node to Linkedlist
    add(elem) {
        let node = new Node(elem);
        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;            
            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    // insert element at the position index of the list 
    insertAt(element, index) 
    { 
        if (index > 0 && index > this.size) 
            return false; 
        else { 
            // creates a new node 
            var node = new Node(element); 
            var curr, prev; 
            curr = this.head; 
    
            // add the element to the first index 
            if (index === 0) { 
                node.next = head; 
                this.head = node; 
            } else { 
                curr = this.head; 
                var it = 0; 
    
                // iterate over the list to find the position to insert 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
    
                // adding an element 
                node.next = curr; 
                prev.next = node; 
            } 
            this.size++; 
        } 
    } 

    // removes an element from the specified location
    removeFrom(index) 
    { 
        if (index > 0 && index > this.size) 
            return -1; 
        else { 
            var curr, prev, it = 0; 
            curr = this.head; 
            prev = curr; 
    
            // deleting first element 
            if (index === 0) { 
                this.head = curr.next; 
            } else { 
                // iterate over the list to the position to removce an element 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
                // remove the element 
                prev.next = curr.next; 
            } 
            this.size--; 
    
            // return the remove element 
            return curr.element; 
        } 
    } 

    removeElement(element) 
    { 
        var current = this.head; 
        var prev = null; 

        // iterate over the list 
        while (current != null) { 
            // comparing element with current element if found then remove the and return true 
            if (current.element === element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    }

    /****** Helper Function ******/
    // checks the list for empty 
    isEmpty() 
    { 
        return this.size == 0; 
    } 

    // finds the index of element
    indexOf(element) 
    { 
        var count = 0; 
        var current = this.head; 
    
        // iterae over the list 
        while (current != null) { 
            // compare each element of the list 
            // with given element 
            if (current.element === element) 
                return count; 
            count++; 
            current = current.next; 
        } 
    
        // not found 
        return -1; 
    } 

    // prints the list items 
    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 
}

var num_list =  new LinkedList();
var info = 101;

while(num_list.size !== 3) {
    num_list.add(info);
    info++;
}

num_list.insertAt(100, 1);
// console.log("remove " + num_list.removeFrom(2)); 
// console.log(num_list);
// console.log(num_list.size);
num_list.printList();