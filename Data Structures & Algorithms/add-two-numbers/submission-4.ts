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
        let dummy = new ListNode(0)

        const head = dummy
        let carry = 0
        while(l1 !== null || l2 !== null || carry){
            let l1Val = l1 !== null ? l1.val : 0
            let l2Val = l2 !== null ? l2.val : 0

            let addTwoNumbers = l1Val + l2Val + carry

            carry = Math.floor(addTwoNumbers / 10)
            let val = addTwoNumbers % 10
            dummy.next = new ListNode(val)

            dummy = dummy.next
            l1 = l1 !== null ? l1.next : null
            l2 = l2 !== null ? l2.next : null
        }
        return head.next
    }
}