// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        const oldToNew = new Map()
        oldToNew.set(null, null)

        let current = head
        while(current !== null){
            const copy = new Node(current.val)
            oldToNew.set(current,copy)

            current = current.next
        }
        current = head
        while(current !== null){
            const copy = oldToNew.get(current)
            copy.next = oldToNew.get(current.next)
            copy.random = oldToNew.get(current.random)
            
            current = current.next
        }

        return oldToNew.get(head)
    }
}
