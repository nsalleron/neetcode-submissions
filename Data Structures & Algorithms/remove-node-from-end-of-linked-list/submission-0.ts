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

        let l = dummy
        let r = dummy.next

        let count = 0
        while(r !== null){
            r = r.next
            count++
            if(count > n){
                l = l.next
            }
            
        }


        l.next = l.next.next
        return dummy.next

    }
}
