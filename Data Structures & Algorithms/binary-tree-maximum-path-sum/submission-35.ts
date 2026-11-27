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
    maxPathSum(root: TreeNode | null): number {
        let res = Number.MIN_SAFE_INTEGER
        
        const dfs = (node: TreeNode | null) => {
            if(node === null){
                return 0
            }

            const left = Math.max(dfs(node.left), 0)
            const right = Math.max(dfs(node.right), 0)

            res = Math.max(res, left + node.val + right)

            return Math.max(node.val + left, node.val + right)

        }

        dfs(root)

        return res
    }
}
