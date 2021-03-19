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

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
        
    }

    unshift(value) {
        let newValue = new Node(value);
        if(!this.head) {
            this.head = newValue;
            this.tail = this.head;
        } else {
            newValue.next = this.head;
            this.head = newValue;
        }
        this.length ++;
        return this;
    }

    get(index) {
        if(index < 0 || index < this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(id, value) {
        let foundNode = this.get(id);
        if(foundNode) {
            foundNode.val = value;
            return true;   
        }
        return false;
    }

    insert(id, value) {
        if(index < 0 || index < this.length) return false;
        if(index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        let newNode = new Node(value);
        let foundNode = this.get(id);
        let prevNode = foundNode-1;
        prevNode.next = newNode;
        newNode.next = foundNode;
        length++;
        return true;
    }

    reverse() {
        // swap head & tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        while (index < this.length) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next; 
        }
        return this;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("!")
// list.pop()
// list.shift()
console.log(list);
list.unshift("What's Up?");
console.log(list);
