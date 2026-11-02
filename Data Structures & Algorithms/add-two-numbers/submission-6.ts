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
        let carry = 0
        const dummy = new ListNode()
        let node = dummy

        while(l1 !== null || l2 !== null || carry !== 0){
            const l1Result = l1 !== null ? l1.val : 0
            const l2Result = l2 !== null ? l2.val : 0
            const result = l1Result + l2Result + carry

            carry = Math.floor(result / 10)
            
            node.next = new ListNode(result % 10)
            node = node.next
            
            l1 = l1 !== null ? l1.next : null
            l2 = l2 !== null ? l2.next : null
        }

        return dummy.next
    }
}