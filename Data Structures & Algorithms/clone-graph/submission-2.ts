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
        const oldToNew = new Map()

        const dfs = (node: Node | null) => {
            if(node === null){
                return null
            }
            if(oldToNew.has(node)){
                return oldToNew.get(node)
            }

            const copy = new Node(node.val)
            oldToNew.set(node, copy)

            const res = []
            for(let n of node.neighbors){
                let nC = dfs(n)
                res.push(nC)
            }

            copy.neighbors = res

            return copy
        }

        return dfs(node)
    }
}
