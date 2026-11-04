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
            return null
        }
        const dfs = (root: TreeNode | null) => {
            if(root === null){
                return
            }

            const tmp = root.left
            root.left = root.right
            root.right = tmp

            dfs(root.left)
            dfs(root.right)

            return root
        }

        return dfs(root)
    }
}
