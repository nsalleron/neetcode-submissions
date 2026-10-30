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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!subRoot) {
            return true;
        }

        if (!root) {
            return false;
        }

        if (this.isSameTree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p || !q) {
            return p === q;
        }

        return p.val === q.val && this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
