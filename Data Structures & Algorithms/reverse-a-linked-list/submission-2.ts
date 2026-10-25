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

    getNewHead(curr: ListNode | null, prev: ListNode | null){
        if(curr === null){
            return prev
        }

        let next = curr.next
        curr.next = prev
        return this.getNewHead(next, curr)
    }
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        return this.getNewHead(head, null)
    }
}
