/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
       const oldToNew = new Map<Node, Node>()

       const dfs = (n: Node) => {
            if(oldToNew.has(n)){
                return oldToNew.get(n)
            }

            const newNode = new Node(n.val)
            oldToNew.set(n, newNode)

            const newNei = []
            for(let nei of n.neighbors){
                newNei.push(dfs(nei))
            }

            newNode.neighbors = newNei

            return newNode
       }

       return node === null ? null : dfs(node)


    }
}
