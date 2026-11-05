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
        let dummy = new ListNode(0, head)
        let endOfPreviousGroup = dummy

        while(true){
            const endOfCurrentGroup = this.getKNode(endOfPreviousGroup, k)
            if(endOfCurrentGroup === null){
                break // we are leave our while loop with this mechanism
            }

            //reverse
            let previous = endOfCurrentGroup.next
            let nextGroup = endOfCurrentGroup.next
            let current = endOfPreviousGroup.next

            while(current !== nextGroup){
                const next = current.next
                current.next = previous
                previous = current
                current = next
            }


            const oldNextGroup = endOfPreviousGroup.next
            endOfPreviousGroup.next = endOfCurrentGroup
            endOfPreviousGroup = oldNextGroup
        }

        return dummy.next
    }

    getKNode(head: ListNode | null, k: number): ListNode {
        let current = head
        while(current !== null && k > 0){
            current = current.next
            k--
        }

        return current
    }
}
