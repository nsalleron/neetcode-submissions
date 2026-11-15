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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy = new ListNode()
        const head = dummy
        let carry = 0

        while(l1 !== null || l2 !== null){
            const val = (l1?.val ?? 0) + (l2?.val ?? 0) + carry

            carry = Math.floor(val / 10)

            dummy.next = new ListNode(val % 10)
            dummy = dummy.next

            l1 = l1?.next ?? null
            l2 = l2?.next ?? null
        }

        if(carry > 0){
            dummy.next = new ListNode(carry)
        }

        return head.next
    }
}
