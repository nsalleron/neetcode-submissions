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
        const isSameTree = (root: TreeNode| null, subRoot: TreeNode|null) => {
            if(!root || !subRoot){
                return root === subRoot
            }

            return root.val === subRoot.val && isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
        }
        const dfs = (root: TreeNode | null, subRoot: TreeNode | null) => {
            if(root === null){
                return false
            }

            if(subRoot === null){
                return true
            }

            if(isSameTree(root, subRoot)){
                return true
            }

            return dfs(root.left, subRoot) || dfs(root.right, subRoot)
        }

        return dfs(root, subRoot)
    }
}
