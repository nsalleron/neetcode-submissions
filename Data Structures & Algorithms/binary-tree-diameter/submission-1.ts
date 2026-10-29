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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let res = 0

        const dfs = (node: TreeNode | null) => {
            if(node === null){
                return 0
            }

            const leftHeight = dfs(node.left)
            const rightHeight = dfs(node.right)

            res = Math.max(res, leftHeight + rightHeight)

            return Math.max(leftHeight, rightHeight) + 1
        }

        dfs(root)

        return res

    }
}
