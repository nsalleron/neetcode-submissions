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
        let s = head
        let f = head.next

        while(f !== null && f.next !== null){
            s = s.next
            f = f.next.next
        }

        let current = s.next
        let previous = null
        s.next = null
        while(current !== null){
            const next = current.next
            current.next = previous
            previous = current
            current = next
        }


        let l1 = head
        let l2 = previous
        
        while(l1 !== null && l2 !== null){
            const l1Next = l1.next
            const l2Next = l2.next
            l1.next = l2
            l2.next = l1Next
        
            l1 = l1Next
            l2 = l2Next
        }

    }
}
