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
        let length = 0
        let node = head
        while(node !== null){
            length += 1
            node = node.next
        }
        node = head
        let half = Math.ceil(length / 2)
        const leastNode = []
        let i = 0
        while(node !== null){
            i++
            if(i > half){
                leastNode.push(node)
            }
            node = node.next
        }

        node = head
        while(leastNode.length > 0){
            const nextNode = leastNode.pop()
            const next = node.next
            node.next = nextNode
            nextNode.next = next
            node = next
        }

        if (node !== null) {
            node.next = null
        }
    }

}