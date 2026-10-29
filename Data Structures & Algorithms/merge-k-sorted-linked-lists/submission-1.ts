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
        if (lists.length === 0) {
            return null;
        }

        while(lists.length > 1){
            const sortedList = []
            for(let i = 0; i < lists.length; i += 2){
                let list1 = lists[i]
                let list2 = i + 1 < lists.length ? lists[i + 1] : null

                sortedList.push(this.merge(list1, list2))
            }
            lists = sortedList
        }

        return lists[0]

    }

    merge(list1: ListNode, list2: ListNode): ListNode {

        let dummy = new ListNode(0)
        let head = dummy
        while(list1 && list2){
            if(list1.val <= list2.val){
                dummy.next = list1
                list1 = list1.next
            } else {
                dummy.next = list2
                list2 = list2.next
            }

            dummy = dummy.next
        }

        dummy.next = list1 ? list1 : list2

        return head.next

    }
}
