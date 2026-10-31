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
        const dfs = (root: TreeNode | null) => {
            if (root === null) {
                return [];
            }
            
            const leftNodes = dfs(root.left);
            const rightNodes = dfs(root.right)
            
            return [...leftNodes, root, ...rightNodes]
        };

        const array = dfs(root)

        return array[k - 1].val
    }
}
