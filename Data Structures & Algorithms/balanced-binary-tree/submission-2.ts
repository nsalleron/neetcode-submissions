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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if(!root){
            return true
        }
        
        const dfs = (root: TreeNode | null) => {
            if(root === null){
                return [true, 0]
            }

            const leftHeight = dfs(root.left)
            const rightHeight = dfs(root.right)

            const balanced = leftHeight[0] && rightHeight[0] && Math.abs(leftHeight[1] - rightHeight[1]) <= 1

            return [balanced, Math.max(leftHeight[1], rightHeight[1]) + 1]
        }

        return dfs(root)[0]
        
    }
}
