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

        const dfs = (node: Node | null) => {
            if(node === null){
                return null
            }
            if(oldToNew.has(node)){
                return oldToNew.get(node)
            }

            const newNode = new Node(node.val)
            oldToNew.set(node, newNode)

            const newNodes = []
            for(let n of node.neighbors){
                newNodes.push(dfs(n))
            }
            newNode.neighbors = newNodes


            return newNode

        }

        return dfs(node)

    }
}
