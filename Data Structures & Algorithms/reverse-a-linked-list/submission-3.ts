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
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

        let previous = null
        let current = head

        while(current !== null){
            const tmp = current.next
            current.next = previous
            previous = current
            current = tmp
        }

        return previous
    }
}
