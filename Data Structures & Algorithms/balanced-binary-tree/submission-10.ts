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

        const dfs = (root: TreeNode | null) => {
            if(root === null){
                return [true, 0]
            }

            const [leftBalanced, leftHeight] = dfs(root.left)
            const [rightBalanced, rightHeigt] = dfs(root.right)

            const isBalanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeigt) <= 1

            return [isBalanced, Math.max(leftHeight, rightHeigt) + 1]

        }

        return dfs(root)[0]

        
    }
}
