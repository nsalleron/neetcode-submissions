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
        if(lists.length === 0) {
            return null
        }
        while(lists.length > 1){
            const pushedList = []
            for(let i = 0; i < lists.length; i += 2){
                const list1 = lists[i]
                const list2 = i + 1 < lists.length ? lists[i+1]: null


                pushedList.push(this.merge(list1, list2))
            }
            lists = pushedList
        }

        return lists[0]
    }

    merge(list1: ListNode | null, list2: ListNode | null){
        let dummy = new ListNode(0)
        const head = dummy
        while(list1 !== null && list2 !== null){
            if(list1.val <= list2.val){
                dummy.next = list1
                list1 = list1.next
            } else {
                dummy.next = list2
                list2 = list2.next
            }

            dummy = dummy.next
        }

        dummy.next = list1 !== null ? list1 : list2

        return head.next


    }
}
