/* Queue is a linear data structure. 
   Reference: https://www.geeksforgeeks.org/implementation-queue-javascript/*/
/* Assuming a queue can grow dynamically we are not considering the overflow condition */

class Queue {
    // Array is used to implement a Queue 
    constructor() {
        this.item = [];
    }

    /***************/
    /*  Functions  */
    /***************/

    // add an elememt in the queue
    enqueue(elememt) {
        this.item.push(elememt);
    }

    //removing an element 
    dequeue() {
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.item.shift(); // array.shift() - delete the first element
    }

    // returns the front element of the queue
    front() {
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.item[0];    
    }

    /***************/
    /*    Helper   */
    /***************/

    isEmpty() 
    { 
        return this.item.length === 0; 
    } 

    printQueue() {
        let str = "";
        for(let i=0; i<this.item.length; i++) {
            str += this.item[i] + " ";
        }
        return str;
    }
}

var myQueue = new Queue();

console.log(myQueue.isEmpty()); // true

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);

console.log(myQueue.printQueue()); // 10 20 30 40 50
console.log(myQueue.front()); // 10

console.log(myQueue.dequeue()); // 10 - "firsr in, last out";
console.log(myQueue.printQueue()); // 20 30 40 50