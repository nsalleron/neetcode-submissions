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
        let carry = false
        let dummy = new ListNode(0)
        const head = dummy

        while(l1 !== null || l2 !== null){
            const val1 = l1 !== null ? l1.val : 0
            const val2 = l2 !== null ? l2.val : 0
            let result = val1 + val2

            if(carry) {
                result += 1
            }

            if(result > 9){
                result = result - 10
                carry = true
            } else {
                carry = false
            }

            dummy.next = new ListNode(result)
            dummy = dummy.next
            if (l1 !== null) l1 = l1.next
            if (l2 !== null) l2 = l2.next
        }

        if(carry){
            dummy.next = new ListNode(1)
        }

        return head.next
    }
}
