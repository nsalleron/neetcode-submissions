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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let slow = head
        let fast = head.next

        while(fast !== null && fast.next !==null){
            slow = slow.next
            fast = fast.next.next
        }

      
        let second = slow.next
        
        slow.next = null
        let previous = null
        // reverse
        while(second !== null){
            let tmp = second.next
            second.next = previous

            previous = second
            second = tmp
        }

        //merge
        let first = head
        second = previous
        
        while(second !== null){
            let tmp1 = first.next
            let tmp2 = second.next

            first.next = second
            second.next = tmp1
            
            first = tmp1
            second = tmp2
        }

    }
}
