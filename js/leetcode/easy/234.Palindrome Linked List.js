/**
 *
 * https://leetcode.com/problems/palindrome-linked-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        console.log('Empty or single node list is a palindrome');
        return true;
    }

    // Find the middle node
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // Reverse the second half
    let prev = null;
    let current = slow;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Compare first half with reversed second half
    let firstHalfPointer = head;
    let secondHalfPointer = prev; // head of reversed second half

    while (secondHalfPointer) {
        if (firstHalfPointer.val !== secondHalfPointer.val) {
            return false;
        }
        firstHalfPointer = firstHalfPointer.next;
        secondHalfPointer = secondHalfPointer.next;
    }

    return true;
};
