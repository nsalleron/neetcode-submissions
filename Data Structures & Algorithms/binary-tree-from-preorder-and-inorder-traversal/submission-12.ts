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
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let preIndex = 0
        let inIndex = 0

        const dfs = (limit: number) => {
            if(preIndex >= preorder.length) return null;
            if(inorder[inIndex] === limit){
             inIndex++
             return null
            }

            const node = new TreeNode(preorder[preIndex++])
            node.left = dfs(node.val)
            node.right = dfs(limit)

            return node
        }

        return dfs(Infinity)
    

    }
}
