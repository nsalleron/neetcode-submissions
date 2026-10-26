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
        if (head === null || head.next === null) {
            return;
        }

        let slow = head;
        let fast = head.next;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        let secondListHead = slow.next
        slow.next = null

        let previous = null
        while(secondListHead !== null){
            const nextNode = secondListHead.next
            secondListHead.next = previous

            previous = secondListHead
            secondListHead = nextNode
        }

        secondListHead = previous

        let dummy = new ListNode(0)
        while(head !== null && secondListHead !== null){
            let nextHeadNode = head.next
            let nextSecondListHeadNode = secondListHead.next

            dummy.next = head
            dummy.next.next = secondListHead

            dummy = dummy.next.next
            head = nextHeadNode
            secondListHead = nextSecondListHeadNode
        }
        dummy.next = head;

        return dummy.next

    }
}
