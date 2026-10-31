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
        const dummy = new ListNode(0, head)

        let slow = dummy
        let fast = dummy.next

        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }

        let list2 = slow.next
        slow.next = null

        //reverse
        let previous = null
        let current = list2
        while(current !== null){
            const tmp = current.next
            current.next = previous
            previous = current
            current = tmp
        }
        console.log({previous})
        list2 = previous
        let list1 = dummy.next

        while(list1 !== null && list2 !== null){
            const nextList1 = list1.next
            const nextList2 = list2.next

            list1.next = list2 !== null ? list2 : list1.next
            list2.next = nextList1 !== null ? nextList1 : list2.next

            list1 = nextList1
            list2 = nextList2

        }

        //console.log({list1, list2, previous, current, dummy})

        return dummy.next
    }
}
