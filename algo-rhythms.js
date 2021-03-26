// Write a function caled binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise return -1;

function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while (arr[middle] !== value && start <= end) {
        value < arr[middle] ? end = middle - 1 : start = middle + 1;
        middle = Math.floor((start + end )/ 2);
    }
    
    return arr[middle] === value ? middle : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 10, 15, 22, 25], 25));


// Selection Sort
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// console.log(selectionSort([5, 3, 21, 33, 48, 13, 4, 1]))

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        // Start by picking the second element in the array
        let currentVal = arr[i];
        // Now compare the second element with the one before it and swap if necessary.
        for(var j = i-1; i >= 0 && arr[j] > currentVal; j--) {
            // Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
            arr[j+1] = arr[j];
        }
        // Repeat until the array is sorted.
        arr[j+1] = currentVal;
    }

    return arr;
}

// console.log(insertionSort([4,1,3,2,5]));

function mergeArrays(arr1, arr2) {
    let arr = [];
    let j = 0;
    let i = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++
        } else {
            arr.push(arr2[j]);
            j++
        }
    }
    while(i < arr1.length) {
        arr.push(arr1[i]);
        i++
    }
    while(j < arr2.length) {
        arr.push(arr2[j]);
        j++
    }
    return arr;
}


// break up the array until you have arrays of one or none elements
// once you have broken arrays - merge the arrays back together

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return mergeArrays(left, right)
}

// console.log(mergeSort([1,10,21,2,12,30,20]))

// piece of data - val
//reference to next node - next

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         let newNode = new Node(val)
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }

//     pop(){
//         if(!this.head) return undefined;
//         let current = this.head;
//         let newTail = current;
//         while(current.next) {
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         return current;
//     }

//     shift() {
//         if(!this.head) return undefined;
//         let currentHead = this.head;
//         this.head = currentHead.next;
//         this.length--;
//         return currentHead;
        
//     }

//     unshift(value) {
//         let newValue = new Node(value);
//         if(!this.head) {
//             this.head = newValue;
//             this.tail = this.head;
//         } else {
//             newValue.next = this.head;
//             this.head = newValue;
//         }
//         this.length ++;
//         return this;
//     }

//     get(index) {
//         if(index < 0 || index < this.length) return null;
//         let counter = 0;
//         let current = this.head;
//         while(counter !== index) {
//             current = current.next;
//             counter++;
//         }
//         return current;
//     }

//     set(id, value) {
//         let foundNode = this.get(id);
//         if(foundNode) {
//             foundNode.val = value;
//             return true;   
//         }
//         return false;
//     }

//     insert(id, value) {
//         if(index < 0 || index < this.length) return false;
//         if(index === this.length) return this.push(value);
//         if (index === 0) return this.unshift(value);
//         let newNode = new Node(value);
//         let foundNode = this.get(id);
//         let prevNode = foundNode-1;
//         prevNode.next = newNode;
//         newNode.next = foundNode;
//         length++;
//         return true;
//     }

//     reverse() {
//         // swap head & tail
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         let next = null;
//         let prev = null;
//         while (index < this.length) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next; 
//         }
//         return this;
//     }
// }

// // var first = new Node("Hi")
// // first.next = new Node("there")
// // first.next.next = new Node("how")
// // first.next.next.next = new Node("are")
// // first.next.next.next.next = new Node("you")

// var list = new SinglyLinkedList()
// // list.push("HELLO")
// // list.push("GOODBYE")
// // list.push("!")
// // list.pop()
// // list.shift()
// console.log(list);
// list.unshift("What's Up?");
// console.log(list);

//************************************************************ */
//**************** DOUBLY LINKED LISTS ************************ */
//************************************************************ */

// class Node{
//     constructor(val){
//         this.val = val;
//         this.head = null;
//         this.tail = null;
//     }
// }

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let oldTail = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
        }
        this.length--;
        return oldTail;
    }

    shift() {
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.head === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next; 
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

// var DList = new DoublyLinkedList();
// DList.push('first');
// DList.push('second');
// DList.push('third');
// console.log(DList);


var cutOffTree = function(forest) {
    // class Node{
    //     constructor(val){
    //         this.val = val;
    //         this.next = null;
    //     }
    // }

    class SinglyLinkedList{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        push(val) {
            let newNode = new Node(val);
            if(!this.head) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                this.tail.prev = this.tail;
                this.tail = newNode;
            }
            this.length++;
            return this;
        }
    }
    
    let newList = new SinglyLinkedList;
    let minSteps = 0;
    let pointer = 1;
    
    for(let i = 0; i < forest.length; i++) {
        for(let j = 0; j < forest[i].length; j++) {
            if (forest[i][j] !== 0 && forest[i][j] < forest[i][1]) {
                console.log(forest[i][j])
                newList.push(forest[i][j]);
            } 
        }
    }
    console.log(newList)
    minSteps = newList.length;
    return minSteps;
};

// console.log(cutOffTree([[1,2,3],[0,0,4],[7,6,5]]))

// Queues

class QNode {
    consructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++;
    }
    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// var Q = new Queue();
// Q.enqueue("First");
// Q.enqueue("Second")
// console.log(Q);
// Q.dequeue()
// console.log(Q);

// Binary Search Trees / Trees

class TNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new TNode(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(val === current.value) return undefined;
                if(val < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } current = current.left;
                } else {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } current = current.right;
                }
            }
        }
        
    }
    find(val) {
        if(this.root === null) {
            return false;
        } 
        var current = this.root,
            found = false;
        while(current && !found) {
            if(val === current.value) {
                found = true;
            };
            if(val < current.value) {
                current = current.left;
            } else if(val > current.value){
                if(current.right === null) {
                    current = current.right;
                } 
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    BFS() {
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length) {
            node = queue.shift(); 
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        var current = this.root,
            data = [];
        const traverse = (node) => {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostOrder() {
        var current = this.root,
            data = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(current);
        return data;
    }

    DFSInOrder() {
        var current = this.root,
            data = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            data.push(node.value)
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

}

// var tree = new BST();
// tree.root = new TNode(10);
// tree.root.right = new TNode(15);
// tree.root.left = new TNode(7);
// console.log(tree);
// tree.insert(11);
// tree.insert(17);
// tree.insert(2);
// console.log(tree.BFS());
// console.log(tree.DFSPreOrder());
// console.log(tree.DFSPostOrder());
// console.log(tree.DFSInOrder());

/* ######################## */
/* ######################## */
/* ######################## */
// HEAPS // 
/* ######################## */
/* ######################## */
/* ######################## */

class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12]
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index]
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
        
    }
}

// let heap = new MaxBinaryHeap();
// heap.insert(55);
// heap.insert(3);
// heap.insert(199);
// console.log(heap.values);


class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
// console.log(ER)
// ER.dequeue();
// console.log(ER)


//***************** ******************/
//***************** ALGORITHM PRACTICE ******************/
//***************** ******************/


// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Example 1:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

const longest_substring_with_k_distinct = function(str, k) {
    let start = 0;
    let maxLength = 0;
    let hashTable = {};
  
    for(let end = 0; end < str.length; end++) {
      let windowEnd = str[end];
      if(!(hashTable[windowEnd])) {
        hashTable[windowEnd] = 0;
      }
      hashTable[windowEnd] += 1;
  
      while(Object.keys(hashTable).length > 2) {
        let windowStart = str[start];
        hashTable[windowStart] -= 1;
        if(hashTable[windowStart] === 0) {
          delete hashTable[windowStart];
        }
        start++;
      }
  
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength; // return max length of smallest substring
  };

  console.log(longest_substring_with_k_distinct('aarrrrci', 2));