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
        const map = new Map();
        map.set(null, null);

        let current = head;

        while (current !== null) {
            const nodeCpy = new Node(current.val);
            map.set(current, nodeCpy);

            current = current.next;
        }

        current = head;

        while (current !== null) {
            const node = map.get(current);
            node.next = map.get(current.next);
            node.random = map.get(current.random);
            current = current.next;
        }

        return map.get(head);
    }
}
