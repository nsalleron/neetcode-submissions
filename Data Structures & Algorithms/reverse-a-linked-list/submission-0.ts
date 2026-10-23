/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {

    newHead(curr: ListNode | null, prev: ListNode | null): ListNode | null {
        if (curr === null) {
            return prev;
        }
        const next = curr.next;
        curr.next = prev;
        return this.newHead(next, curr);
    }
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode | null {
        return this.newHead(head, null);
    }
}