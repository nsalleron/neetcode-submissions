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
    maxDepth(root: TreeNode | null): number {

        const dfs = (root: TreeNode | null) => {
            if(root === null){
                return 0
            }

            const left = dfs(root.left)
            const right = dfs(root.right)

            return Math.max(left, right) + 1

        }
        
        return dfs(root)
    }
}
