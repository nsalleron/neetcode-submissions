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
    goodNodes(root: TreeNode | null): number {
        let res = 0

        const dfs = (root: TreeNode | null, maxValue: number) => {
            if(root == null){
                return 0
            }

            if(root.val >= maxValue){
                res += 1
            }

            dfs(root.left, Math.max(maxValue, root.val))
            dfs(root.right, Math.max(maxValue, root.val))
        }

        dfs(root, Number.MIN_SAFE_INTEGER)

        return res

    }
}
