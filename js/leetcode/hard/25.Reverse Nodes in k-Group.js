/**
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * to run it in perfect way go to => js/DataStructure/LinkedList/LinkedList.js || line 138
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param { ListNode } head
 * @param { number } k
 * @return { ListNode }
 */
var reverseKGroup = function(head, k) {
    if (k <= 1 || k > head?.length) return head;

    let curr = head;
    let newHead = null;
    let tail = null;

    while (curr !== null) {
        let groupHead = curr;

        let prev = null;

        let nextNode = null;

        let count = 0;
        let tracker = curr;

        for (let i = 1; i < k; i++) {
            if (tracker === null) {
                break;
            }
            tracker = tracker?.next;
        }

        if (tracker !== null) {
            while (curr !== null && count < k) {
                nextNode = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextNode;
                count++;
            }

            if (newHead === null) {
                newHead = prev;
            }

            if (tail !== null) {
                tail.next = prev;
            }

            tail = groupHead;
        } else {
            if(tail !== null) tail.next = curr
            while (curr) curr = curr.next
        }
    }
    return newHead;
};
