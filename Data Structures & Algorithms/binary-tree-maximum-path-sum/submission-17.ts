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

        const dfs = (root: TreeNode | null) => {
            if(root === null){
                return 0
            }

            const left = Math.max(dfs(root.left), 0)
            const right = Math.max(dfs(root.right), 0)

            res = Math.max(res, left + right + root.val)

            return Math.max(left, right) + root.val
        }

        dfs(root)

        return res

    }
}
