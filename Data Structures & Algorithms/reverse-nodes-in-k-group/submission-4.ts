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
    reverseKGroup(head: ListNode | null, k: number): ListNode | null {
       let dummy = new ListNode(0, head)
       let endOfPreviousGroup = dummy

       while(true){
            let lastElementOfCurrentGroup = this.getLastElementOfCurrentGroup(endOfPreviousGroup, k)
            if(lastElementOfCurrentGroup === null){
                break
            }

            //inversion
            let nextGroup = lastElementOfCurrentGroup.next
            let previous = lastElementOfCurrentGroup.next
            let current = endOfPreviousGroup.next

            while(current !== nextGroup){
                const tmp = current.next
                current.next = previous
                previous = current
                current = tmp
            }


            const endOfOldGroup = endOfPreviousGroup.next
            endOfPreviousGroup.next = previous
            endOfPreviousGroup = endOfOldGroup
       }

       return dummy.next
    }


    getLastElementOfCurrentGroup(node: ListNode | null, k: number){
        while(node !== null && k > 0){
            node = node.next
            k--
        }

        return node
       
    }
}
