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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (root === null) return null;

        [root.left, root.right] = [
            root.right !== null ? this.invertTree(root.right) : null,
            root.left !== null ? this.invertTree(root.left) : null,
        ];

        return root;
    }
}
