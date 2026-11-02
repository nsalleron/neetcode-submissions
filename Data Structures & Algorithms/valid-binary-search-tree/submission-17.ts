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
    isValidBST(root: TreeNode | null): boolean {

        const dfs = (root: TreeNode | null, min: number, max: number) => {
            if(root === null){
                return true
            }

            if(root.val <= min || root.val >= max){
                return false
            }

            const isLeftValid = dfs(root.left, min, root.val)
            const isRightValid = dfs(root.right, root.val, max)


            return isLeftValid && isRightValid 

            
        }

        return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

    }
}
