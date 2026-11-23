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
        if(root === null) return true
        const dfs = (node: TreeNode | null, min: number, max: number) => {
            if(node === null){
                return true
            }

            const isLeftOk = dfs(node.left, min, node.val)
            const isRightOk = dfs(node.right, node.val, max)

            return node.val > min && node.val < max && isLeftOk && isRightOk

        }

        return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }
}
