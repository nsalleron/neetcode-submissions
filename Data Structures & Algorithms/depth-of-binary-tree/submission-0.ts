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

    look(root: TreeNode | null, level: number){
        if(root === null){
            return level
        }

        return Math.max(this.look(root.left, level + 1),this.look(root.right, level + 1))
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        return this.look(root, 0)
    }
}
