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
        
        const dfs = (root: TreeNode | null): [boolean, number] => {
            if(root=== null){
                return [true,0]
            }

            const left = dfs(root.left)
            const right = dfs(root.right)

            const isBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1


            return [isBalanced, Math.max(left[1], right[1]) + 1]
        }

        return dfs(root)[0]
    }
}
