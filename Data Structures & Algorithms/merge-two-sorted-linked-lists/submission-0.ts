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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let dummy = new ListNode()
        const head = dummy

        while(list1 !== null && list2 !== null){
            const l1Val = list1.val
            const l2val = list2.val

            if(l1Val <= l2val){
                dummy.next = list1
                list1 = list1.next
            } else {
                dummy.next = list2
                list2 = list2.next
            }

            dummy = dummy.next
        }

        if(list1 !== null){
            dummy.next = list1
        }
        if(list2 !== null){
            dummy.next = list2
        }

        return head.next

    }
}
