import { Node } from "./Node.js"

class LinkedList {
    constructor() {
        this.head = null; // Initially, the list is empty
        this.size = 0;    // Track the number of nodes in the list
    }

    append(data) {
        const newNode = new Node(data); // Create a new node

        if (!this.head) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
        } else {
            // Traverse to the end of the list and add the new node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++; // Increment the size of the list
        return this;
    }

    prepend(data) {
        const newNode = new Node(data); // Create a new node
        newNode.next = this.head;       // Point the new node to the current head
        this.head = newNode;            // Set the new node as the head
        this.size++;                    // Increment the size of the list
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    delete(data) {
        // If the list is empty, do nothing
        if (!this.head) return;

        // If the node to delete is the head
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        // Traverse the list to find the node to delete
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next; // Skip the node to delete
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Invalid index");
        }

        if (index === 0) {
            this.prepend(data)
            return;
        }

        const newNode = new Node(data);

        // Traverse to the node just before the desired index
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        // Insert the new node
        newNode.next = current.next; // Point the new node to the next node
        current.next = newNode;      // Point the current node to the new node

        this.size++; // Increment the size of the list
    }

    deleteAt(index) {
        if (index < 0 || index > this.size) {
            throw new Error("Invalid index");
        }

        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        // Traverse to the node just before the desired index
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        // Delete the node
        current.next = current.next.next;

        // Decrement the size of the list
        this.size--;
    }

    findMiddleNode() {
        /*
            if (this.size <= 1) return this.head?.data ?? null;

            let loop = Math.ceil(this.size / 2);
            let curr = this.head;

            while (loop !== 1) {
                curr = curr.next;
                loop--;
            }
        */

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        console.log('Middle Node:', slow?.data)
        return slow;
    }

    reverse() {
        // Points to the previous node
        let previous = null;
        // Points to the current node
        let current = this.head;

        while (current !== null) {
            // Store the next node
            let next = current.next;

            // Reverse the pointer of the current node
            current.next = previous;

            // Move previous to the current node
            previous = current;

            // Move current to the next node
            current = next;
        }

        // Update the head to the new first node
        this.head = previous;
    }

    reverseInGroups(k) {
        if (k <= 1 || k > this.size) return this.head;

        let curr = this.head;

        // Purpose: Stores the new head of the entire reversed list.
        // Why needed: Since the original head will change after reversal,
        // we need to track the new head (which will be the last node of the first group).
        // Initial value: null
        // Assignment: Set once after the first group is reversed: newHead = prev.
        let newHead = null;

        // Purpose: Tracks the last node of each reversed group.
        // Why needed: To connect one reversed group to the next reversed group.
        // Initial value: null
        // Updates: After reversing each group, it's updated to point to groupHead,
        // (which was the first node of the group before reversal, but becomes the last node after reversal).
        let tail = null;

        while (curr !== null) {
            // Purpose: Marks the start of each group before reversal.
            // Why needed: After reversal, this becomes the last node of the current group,
            // which needs to be connected to the next group.
            // Assignment: Set to curr at the beginning of each group.
            let groupHead = curr;

            let prev = null;

            // Purpose: Temporarily stores the next node.
            // Why needed: Before we change curr.next to point to prev,
            // we need to save what curr.next was originally pointing to, so we don't lose the rest of the list.
            // Assignment: nextNode = curr.next before breaking the link.
            let nextNode = null;

            let tracker = curr;
            for (let i = 1; i < k; i++) {
                if (tracker === null) {
                    break;
                }
                tracker = tracker?.next;
            }

            // Reverse the nodes in the current group
            if (tracker !== null) {
                let count = 0;
                while (curr !== null && count < k) {
                    nextNode = curr.next;
                    curr.next = prev;
                    prev = curr;
                    curr = nextNode;
                    count++;
                }

                // This captures the new head of the list after the first group is reversed.
                if (newHead === null) {
                    newHead = prev;
                }

                // This connects the last node of the previous group to the first node of the current reversed group.
                if (tail !== null) {
                    tail.next = prev;
                }

                // This updates the tail to be the last node of the current group (after reversal).
                tail = groupHead;
            } else {
                if(tail !== null) tail.next = curr
                while (curr) curr = curr.next
            }
        }
        this.head = newHead;
    }

    mergeTwoLists(list1, list2) {
        /*
        *
        * At this point, dummy and curr are two separate variables that both point
        * to the same Node object in memory, this Node has value 0 and next is null.
        */
        let dummy = new Node(0);
        let curr = dummy;

        list1 = list1.head
        list2 = list2.head

        while(list1 && list2) {
            if(list1.data < list2.data) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        if(list1) curr.next = list1;
        if(list2) curr.next = list2;
        // console.log('result: ', dummy.next)
        return dummy.next;
    }

    deleteDuplicates() {
        let curr = this.head;

        while (curr) {
            if (curr.data === curr.next?.data) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }

        console.log(this.print())
        return this.head;
    };
}

/*
 *
 * Explain a dummy pattern in linkedList
 *

let dummy = { value: 0, next: null };
// point curr to the same object
let curr = dummy;
// add a new node using curr.
curr.next = { value: 10, next: null };
// move curr forward
curr = curr.next;
// add another node
curr.next = { value: 20, next: null };
// Show the full list starting from dummy
console.log(JSON.stringify(dummy, null, 2));
 */
/***************************************************************/

const list = new LinkedList();
// list.append(1).append(1).append(3).append(4).append(4);
list.append(1).append(1).append(2).append(3).append(4).append(4);
list.deleteDuplicates();

// list.prepend(5); // Add 5 to the beginning

// list.print(); // Output: 5, 10, 20

// list.delete(10); // Delete 10

// list.insertAt(22, 1)
// list.deleteAt(1)
// list.reverse(); // Output: 5, 20
// list.reverseInGroups(3); // Output: 5, 20
// console.log("============= Middle Node =============")
// list.findMiddleNode();
// console.log("============= print =============")
// list.print(); // Output: 5, 20


// const list_1 = new LinkedList();
// list_1.append(1).append(3).append(5);
//
// const list_2 = new LinkedList();
// list_2.append(2).append(4).append(6);
//
// list.mergeTwoLists(list_1, list_2)
