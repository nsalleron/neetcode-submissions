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
        if(root === null){
            return false
        }

        if(subRoot === null){
            return true
        }

        if(this.isSameTree(root, subRoot)){
            return true
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)

    }

    isSameTree(root: TreeNode | null, subRoot: TreeNode | null) {
        if(!root || !subRoot){
            return root === subRoot
        }

        return root.val === subRoot.val && this.isSameTree(root.left, subRoot.left) && this.isSameTree(root.right, subRoot.right)
    }
}
