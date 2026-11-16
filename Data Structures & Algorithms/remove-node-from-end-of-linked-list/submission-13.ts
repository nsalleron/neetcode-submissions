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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let dummy = new ListNode(0, head)
        let left = dummy
        let right = head

        while(n > 0){
            right = right.next
            n--
        }

        while(right !== null){
            dummy = dummy.next
            right = right.next
        }

        dummy.next = dummy.next.next

        return left.next

    }
}
