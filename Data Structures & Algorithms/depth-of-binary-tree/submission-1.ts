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
    depth(root: TreeNode | null, level: number){
        if(root === null){
            return level
        }
        return Math.max(this.depth(root.left, level + 1), this.depth(root.right, level + 1))
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        return this.depth(root, 0)
    }
}
