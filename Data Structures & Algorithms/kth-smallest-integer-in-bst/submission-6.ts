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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let current = null;

        const dfs = (root: TreeNode | null) => {
            if (root === null) {
                return;
            }

            

            dfs(root.left);
            k--;
            if (k === 0) {
                current = root.val;
            }
            dfs(root.right);
        };

        dfs(root);

        return current;
    }
}
