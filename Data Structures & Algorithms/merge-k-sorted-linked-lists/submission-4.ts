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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        while(lists.length > 1){
            const a = lists.pop()
            const b = lists.pop()

            lists.push(this.mergeLists(a,b))
        }

        return lists[0] ?? null
    }

    mergeLists(list1: ListNode, list2:ListNode): ListNode {
        const dummy = new ListNode(0)
        let current = dummy
        while(list1 !== null && list2 !== null){
            if(list1.val < list2.val){
                current.next = list1
                list1 = list1.next
            } else {
                current.next = list2
                list2 = list2.next
            }
            current = current.next
        }

        current.next = list1 ? list1: list2

        return dummy.next
    }
}
