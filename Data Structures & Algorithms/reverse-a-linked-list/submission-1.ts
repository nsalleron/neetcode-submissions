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

    newHead(current: ListNode | null, prev: ListNode|null){
        if(current === null){
            return prev
        }
        const next = current.next
        current.next = prev
        return this.newHead(next, current)

    }


    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        const tail = null
        return this.newHead(head, tail)
    }
}
