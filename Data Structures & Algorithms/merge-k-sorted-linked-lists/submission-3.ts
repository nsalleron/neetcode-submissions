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
            const list1 = lists.pop()
            const list2 = lists.pop()


            lists.push(this.merge(list1, list2))

        }   

        return lists[0]
    }

    merge(list1: ListNode, list2: ListNode): ListNode{
        let dummy = new ListNode()
        let head = dummy
        while(list1 !== null && list2 !== null){
            if(list1.val < list2.val){
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
