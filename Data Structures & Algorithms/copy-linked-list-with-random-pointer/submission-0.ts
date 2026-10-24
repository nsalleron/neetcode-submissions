class SNode {
    val:number
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
        const oldToNew = new Map()
        oldToNew.set(null, null)

        let node = head
        while(node !== null){
            const newNode = new SNode(node.val)
            oldToNew.set(node, newNode)

            node = node.next
        }

        node = head
        while(node !== null){
            const copy = oldToNew.get(node)
            copy.next = oldToNew.get(node.next)
            copy.random = oldToNew.get(node.random)
            node = node.next
       }

       return oldToNew.get(head)
        
        
    }
}
