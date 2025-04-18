/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 * to run it in perfect way go to => js/DataStructure/LinkedList/LinkedList.js || line 265
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (!head) return null;

    let current = head;

    while(current && current.next) {
        if(current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head;
}
