/**
 *
 * https://leetcode.com/problems/remove-linked-list-elements
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    if (! head) return head;

    const dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy;

    while (curr.next !== null) {
        if (curr.next.data === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return dummy.next;
}
