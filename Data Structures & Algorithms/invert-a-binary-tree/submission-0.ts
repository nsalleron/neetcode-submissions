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
        if(root === null){
            return root
        }

        this.invertTree(root.left)
        const left = root.left
        const right = root.right

        root.left = right
        root.right = left
        this.invertTree(root.left)

        return root
    }
}
