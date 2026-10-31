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
        let dummy = new Node(0);
        let copy = dummy;

        while (current !== null) {
            const nodeCpy = new Node(current.val);
            dummy.next = nodeCpy;

            map.set(current, nodeCpy);

            current = current.next;
            dummy = dummy.next;
        }

        current = head;
        copy = copy.next;
        let newList = copy

        while (current !== null) {
            copy.random = map.get(current.random)
            current = current.next;
            copy = copy.next;
        }

        return newList;
    }
}
