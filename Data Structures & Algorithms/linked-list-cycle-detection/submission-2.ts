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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let slow = head
        let fast = head

        while(slow !== null && fast !== null){
            slow = slow?.next
            fast = fast?.next?.next

            if(slow === fast){
                return true
            }


        }
        return false
    }
}
