/* Linked List in JavaScript */

// Defining a class of a node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Defining a class of a Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    // adds a data at the end of list 
    add(data) {
        var node = new Node(data);

        // to store the current node
        var current;
        
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    //  It inserts an data at the given index in a list
    // In order to add an element at the end of the list we consider three conditions as follows:
    // 1. if the index is zero we add a data at the front of the list and make it head
    // 2. If the index is the last position of the list we append the data at the end of the list
    // 3. if the index is inbetween 0 or size – 1 we iterate over to the index and add a data at that index
    // In the above method prev holds the previous of current node.
    insertAt(data, index) {

        if (index > 0 && index > this.size)
            return false;
        else {
            var node = new Node(data);
            var curr, prev;

            if (index = 0) {
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

                // adding an data
                node.next = curr;
                prev = node;
            }
            this.size++;
        }
    }

    // It removes and returns a data from the list from the specified index
    removeFrom(index) {
        if(index>0 && index>this.size) {
            return -1
        }else {
            var curr, prev, it = 0; 
            curr = this.head; 
            prev = curr;

            if (index == 0) {
                this.head = curr.next;
            }else {
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 

                // remove the data
                prev.next = curr.next; 
            }
            this.size--; 
  
            // return the remove data
            return curr.data;
        }
    }

    //this method removes data from the list. It returns the removed data, 
    //or if its not found it returns -1.
    
    removeElement(data) {
        var current = this.head; 
        var prev = null;

        // iterate over the list 
        while (current != null) { 
            // comparing data with current data
            // if found then remove the 
            // and return true 
            if (current.data === data) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.data; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    }

    //The above method is just a modification of removeFrom(index), 
    //as it searches for an element and removes it, rather than removing
    //from a specified location
}