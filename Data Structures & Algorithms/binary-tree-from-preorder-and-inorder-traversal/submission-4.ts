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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        let preIdx = 0
        let inIdx = 0

        const dfs = (limit: number): TreeNode | null => {
            if(preIdx >= preorder.length) return null
            if(inorder[inIdx] === limit){
                inIdx++
                return null
            }

            let root = new TreeNode(preorder[preIdx++]);
            root.left = dfs(root.val)
            root.right = dfs(limit)

            return root
        }

        return dfs(Infinity)
    }
}
