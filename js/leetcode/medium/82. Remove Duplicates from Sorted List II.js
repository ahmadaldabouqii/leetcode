/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new Node(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while(curr) {
        if(curr.next && curr.data === curr.next?.data) {
            while(curr.next && curr.data === curr.next.data) {
                curr = curr.next;
            }
            prev.next = curr.next
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return dummy.next;
};
