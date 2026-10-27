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

    getKth(current: ListNode, k:number){
        while(current !== null && k > 0){
            current = current.next
            k --
        }

        return current
    }

    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        let dummy = new ListNode(0, head)
        let groupPrev = dummy // We are alway gonna save one node before our group

        while(true){
            let kth = this.getKth(groupPrev, k)
            if(kth === null){
                break
            }

            let groupNext = kth.next

            // Reverse
            let previous = kth.next
            let current = groupPrev.next

            while(current !== groupNext){
                let tmp = current.next
                current.next = previous
                previous = current
                current = tmp
            }

            //most complicated part 
            let tmp = groupPrev.next
            groupPrev.next = kth
            groupPrev = tmp
        }

        return dummy.next
    }
}
