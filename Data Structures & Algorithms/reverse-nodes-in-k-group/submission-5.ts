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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        const dummy = new ListNode(0, head)
        let pointerOnPreviousGroup = dummy

        while(true){
            const endOfCurrentGroup = this.getEndOfKGroup(pointerOnPreviousGroup, k)
            if(endOfCurrentGroup === null){
                break
            }

            let previous = endOfCurrentGroup.next
            let nextGroup = endOfCurrentGroup.next
            let current = pointerOnPreviousGroup.next

            while(current !== nextGroup){
                const nextNode = current.next
                current.next = previous
                previous = current
                current = nextNode
            }

            const endOfOldNode = pointerOnPreviousGroup.next
            pointerOnPreviousGroup.next = previous
            pointerOnPreviousGroup = endOfOldNode


        }
        return dummy.next
    }

    getEndOfKGroup(head: ListNode | null, k: number): ListNode {
        while(k > 0 && head !== null){
            head = head.next
            k--
        }
        return head

    }
}
