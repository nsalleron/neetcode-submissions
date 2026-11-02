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

        const dfs = (current: TreeNode | null, min: number, max: number): boolean => {
            if(current === null){
                return true
            }


            if (current.val <= min || current.val >= max) {
                return false;
            }

            const isLeftValid = dfs(current.left, min, current.val)
            const isRightValid = dfs(current.right, current.val, max)

            return isLeftValid && isRightValid
        }

        return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, )
    }
}
