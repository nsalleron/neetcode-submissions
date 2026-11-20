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
        const dfs = (node: TreeNode | null) => {
            if(node === null){
                return [true, 0]
            }

            const [leftBalanced, leftHeight] = dfs(node.left) 
            const [rightBalanced, rightHeight] = dfs(node.right) 


            return [leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1, Math.max(leftHeight, rightHeight) + 1]
        }

        
        return dfs(root)[0]
    }
}
