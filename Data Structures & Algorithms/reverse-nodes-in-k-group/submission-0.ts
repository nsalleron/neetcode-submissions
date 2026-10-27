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

    reverse(head: ListNode | null, k:number, total: number){
        if(total - k < 0){
            return head
        }

    
        let numToReverse = k
        let previous = null
        let tail = null
        let isTail = false
        while(head !== null && numToReverse > 0){
            if(previous === null && isTail === false){
                isTail = true
                tail = head
            }
            const next = head.next 
            head.next = previous
            previous = head
            head = next
            numToReverse--
        }

        const reversed = previous
        const newHead = head

        const nextReverse = this.reverse(newHead, k, total - k)
        
        tail.next = nextReverse

        return reversed
    }

    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        let total = 0
        let current = head
        while(current !== null){
            current = current.next
            total ++
        }

        return this.reverse(head, k, total)

    }
}
