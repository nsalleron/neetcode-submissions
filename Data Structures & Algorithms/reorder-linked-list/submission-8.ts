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

        let secondHead = slow.next
        slow.next = null

        let previous = null
        while(secondHead){
            const secondHeadNext = secondHead.next
            secondHead.next = previous
            previous = secondHead
            secondHead = secondHeadNext
        }

        secondHead = previous

        const dummy = new ListNode(0)
        while(secondHead !== null){
            const nextHead = head.next
            const nextSecondHead = secondHead.next

            dummy.next = head
            head.next = secondHead
            secondHead.next = nextHead

            head = nextHead
            secondHead = nextSecondHead
        }

        return dummy.next

    }
}
