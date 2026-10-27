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
        if(lists.length === 0){
            return null
        }

        while(lists.length > 1){
            const mergedLists = []

            for(let i = 0; i < lists.length; i+=2){
                let list1 = lists[i]
                let list2 = i + 1 < lists.length ? lists[i + 1] : null

                mergedLists.push(this.merge(list1, list2))
            }

            lists = mergedLists
        }

        return lists[0]
    }


    merge(l1: ListNode, l2: ListNode){
        const dummy = new ListNode(0)
        let curr = dummy

        while(l1 && l2){
            if(l1.val <= l2.val){
                curr.next = l1
                l1 = l1.next
            } else {
                curr.next = l2
                l2 = l2.next
            }
            curr = curr.next
        }

        curr.next = l1 ? l1 : l2
        return dummy.next
    }
}
