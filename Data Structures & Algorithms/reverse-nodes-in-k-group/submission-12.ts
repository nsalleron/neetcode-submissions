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
        let dummy = new ListNode(0, head);
        let previousGroup = dummy;

        while (previousGroup.next !== null) {
            let lastBeforeNextGroup = this.getKNode(previousGroup, k);
            if(lastBeforeNextGroup === null){
                break
            }
            let firstElementOfNextGroup = lastBeforeNextGroup.next;

            let previous = firstElementOfNextGroup;
            let firstElementOfGroup = previousGroup.next;
            let nextGroup = lastBeforeNextGroup.next;
            while (firstElementOfGroup !== nextGroup) {
                const next = firstElementOfGroup.next;
                firstElementOfGroup.next = previous;
                previous = firstElementOfGroup;
                firstElementOfGroup = next;
            }

            const next = previousGroup.next;
            previousGroup.next = previous;
            previousGroup = next;
        }

        return dummy.next;
    }

    getKNode(head: ListNode | null, k: number): ListNode {
        let current = head;
        while (current !== null && k > 0) {
            current = current.next;
            k--;
        }

        return current;
    }
}
