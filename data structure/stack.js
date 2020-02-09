/* Stack - a liner data structure. (First in, Last out). Reference: https://www.geeksforgeeks.org/implementation-stack-javascript/ */
class Stack {
    // Array is used to implement stack 
    constructor() {
        this.item = [];
    }

    /***************/
    /*  Functions  */
    /***************/

    push(element) {
        this.item.push(element);
    }

    pop() {
        //can not pop an empty stack "underflow"
        if(this.item.length === 0) {
            return 'underflow';
        }
        return this.item.pop();
    }

    // returns the top element in the stack without removing it
    peek() {
        return this.item[this.item.length-1]
    }

    /*********************/
    /*  Helper Functions */
    /*********************/
    isEmpty() {
        return this.item.length === 0;
    }

    printStack() {
        let str="";
        for (let i = 0; i < this.item.length; i++) 
        str += this.item[i] + " "; 
        return str; 
    }
}

var myStack = new Stack;

console.log(myStack.isEmpty()); // true

myStack.push(5);
myStack.push(7);
myStack.push(3);
myStack.push(2);
myStack.push(8);

console.log(myStack.printStack()); // 5 7 3 2 8
console.log(myStack.peek()); // 5

myStack.pop(); // 5
myStack.pop(); // 7

console.log(myStack.printStack()); // 5 7 3