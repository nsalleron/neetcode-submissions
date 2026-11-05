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

        const dfs = (root:TreeNode | null): number => {
            if(root === null){
                return 0
            }

            const left = Math.max(dfs(root.left), 0)
            const right = Math.max(dfs(root.right), 0)

            const node = left + right + root.val
            res = Math.max(res, node)

            return root.val + Math.max(left, right)

        }

        dfs(root)

        return res

    }
}
