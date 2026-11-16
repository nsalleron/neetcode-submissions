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
        let newHead = dummy
        let current = head

        while(n > 0){
            current = current.next
            n--
        }

        while(current !== null){
            dummy = dummy.next
            current = current.next
        }

        dummy.next = dummy.next.next

        return newHead.next

    }
}
