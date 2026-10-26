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

        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }

        let secondList = slow.next

        slow.next = null

        let previous = null
        while(secondList !== null){
            const nextNode = secondList.next
            secondList.next = previous
            previous = secondList
            secondList = nextNode
        }

        secondList = previous
        while(secondList !== null){
            const headNext = head.next
            const secondNext = secondList.next

            head.next = secondList
            secondList.next = headNext

            head = headNext
            secondList = secondNext

        }
    }
}
