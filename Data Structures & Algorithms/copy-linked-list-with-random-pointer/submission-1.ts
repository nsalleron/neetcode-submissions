class SNode {
    val: number
    next: SNode
    random: SNode
  constructor(val, next = null, random = null) {
      this.val = val;
      this.next = next;
      this.random = random;
  }
}
class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: SNode | null): SNode {
        const oldToCopy = new Map()
        oldToCopy.set(null, null)

        let node = head
        while (node !== null){
            let copy = new SNode(node.val)
            
            oldToCopy.set(node, copy)
            node = node.next
        }

        node = head
        while(node !== null){
            const copy = oldToCopy.get(node)
            copy.next = oldToCopy.get(node.next)
            copy.random = oldToCopy.get(node.random)

            node = node.next
        }

        return oldToCopy.get(head)
    }
}
