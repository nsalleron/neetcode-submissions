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
        const dummy = new ListNode(0)
        let current = dummy
        let carry = 0

        while(l1  || l2  || carry){
            const numberL1 = l1 ? l1.val : 0
            const numberL2 = l2 ? l2.val : 0

            const result = numberL1 + numberL2 + carry

            carry = Math.floor(result / 10)
            current.next = new ListNode(result % 10)

            current = current.next
            l1 = l1?.next
            l2 = l2?.next
        }   

        return dummy.next
        
    }
}
