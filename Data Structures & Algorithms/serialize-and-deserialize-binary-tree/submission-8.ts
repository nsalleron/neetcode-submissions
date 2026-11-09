/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const stack = []

        const dfs = (node: TreeNode) => {
            if(node === null){
                return stack.push('N')
            }

            stack.push(node.val)

            dfs(node.left)
            dfs(node.right)
        }

        dfs(root)

        return stack.join(',')

    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        const stack = data.split(',')
        let front = 0
        const dfs = () => {
            const value = stack[front++] //TODO front
            if(value === 'N'){
                return null
            }

            const node = new TreeNode(parseInt(value))

            node.left = dfs()
            node.right = dfs()

            return node
        }   

        return dfs()
    }
}
