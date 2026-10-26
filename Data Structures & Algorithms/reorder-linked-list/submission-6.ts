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
     * Réorganise la liste directement, sans modifier les valeurs.
     *
     * Exemple :
     * 1 -> 2 -> 3 -> 4 -> 5
     * devient :
     * 1 -> 5 -> 2 -> 4 -> 3
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

        let second = slow.next;
        slow.next = null;

        let previous = null;
        while (second !== null) {
            const nextNode = second.next;

            second.next = previous;

            previous = second;
            second = nextNode;
        }

        second = previous; //bc previous is now the top of the second list, before it was the tail, but we added node while we were inversing the list.
        let first = head;

        while (second !== null) {
            const firstNext = first.next;
            const secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}

