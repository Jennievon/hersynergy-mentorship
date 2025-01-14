// Time Complexity Comparison Table
// Data Structure // Operation // Time Complexity
// Array
// Access by Index
// O(1)
// Insert at End
// O(1)
// Insert at Start
// O(n)

// Linked List
// Insert at Head
// O(1)
// Access by Index
// O(n)

// Stack
// Push/Pop
// O(1)

// Queue
// Enqueue/Dequeue
// O(1)

// Hash Table
// Insert/Search/Delete
// O(1) (avg), O(n) (worst)

// 1. Arrays
// Operations:
// Access by index: O(1)
// Insert/remove at the end: O(1)
// Insert/remove at the beginning: O(n) (requires shifting elements).
// Use Case: Storing ordered data like a list of products.
// Example:
// const products = ['Laptop', 'Phone', 'Tablet'];
// products.push('Monitor'); // O(1)
// products.shift(); // O(n) - Removes 'Laptop' and shifts remaining elements.

// 2. Linked Lists
// Operations:
// Traversal: O(n) (must traverse nodes to find a specific index).
// Insert/remove at the head: O(1) (just update the head pointer).
// Insert/remove at the tail: O(n) (requires traversal to the last node in a singly linked list).
// Use Case: Building dynamic lists, where frequent insertions/deletions are needed.
// Example:
// type Node = {
//     data: number,
//     next: Node | null,
// }

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   add(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) current = current.next;
//       current.next = newNode;
//     }
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.add(10);
// list.add(20);
// list.add(30);
// list.print(); // Outputs: 10, 20, 30

// 3. Stacks (LIFO)
// Operations:
// Push (add): O(1)
// Pop (remove): O(1)
// Use Case: Undo/redo functionality (in text editors), browser history.
// Example:
// class TextEditorHistory {
//   constructor() {
//     this.webPages = [];
//   }

//   push(webPage) {
//     this.webPages.push(webPage);
//   }

//   pop() {
//     return this.webPages.pop();
//   }
// }

// const history = new TextEditorHistory();
// stack.push("https://www.google.com");
// stack.push("https://www.bloccpay.com");
// console.log(stack.pop()); // https://www.google.com

// 4. Queues (FIFO)
// Operations:
// Enqueue (add): O(1)
// Dequeue (remove): O(1)
// Use Case: Task scheduling, customer service requests.
// Example:
// class Queue {
// class PendingRequests {
//   constructor() {
//     this.requests = [];
//   }

//   enqueue(request) {
//     this.requests.push(request);
//   }

//   dequeue() {
//     return this.requests.shift();
//   }
// }

// const queue = new Queue();
// const pendingRequests = new PendingRequests();
// pendingRequests.enqueue('Customer 1');
// pendingRequests.enqueue('Customer 2');
// console.log(queue.dequeue()); // 'Customer 1'

// 5. Hash Tables
// Operations:
// Insert/search/delete: O(1) (average case), O(n) (worst case, with hash collisions).
// Use Case: Fast lookups, such as storing user data by ID.
// Example:
// const hashTable = {
//     username: 'Alice',
//     age: 25,
// };

// const students = {
//   b1003: { name: "Alice", age: 25 },
//   b1004: { name: "Halima", age: 21 },
// };

// students["b1005"] = { name: "Helen", age: 24 }; // Insert - O(1)
// console.log(students["b1005"]); // Search - O(1)
// delete students["b1005"]; // Delete - O(1)

// Array and Stack Exercise:
// Reverse an array using a stack

function reverseArray(array) {
  // LIFO
  const stack = [];

  for (let item of array) {
    stack.push(item);
  }

  const reversed = [];

  while (stack.length > 0) {
    reversed.push(stack.pop());
  }

  return reversed;
}

// console.log(reverseArray([1, 2, 3])); // [3, 2, 1]

// Queue Exercise:

// Simulate a print queue.
class DocumentQueue {
  // FIFO
  constructor() {
    this.documents = [];
  }

  enqueue(document) {
    this.documents.push(document);
  }

  dequeue() {
    return this.documents.shift();
  }
}

const printQueue = new DocumentQueue();
printQueue.enqueue("Document 1");
printQueue.enqueue("Document 2");
console.log(printQueue.dequeue()); // 'Document 1'
