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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let res = null;
        const dfs = (node: TreeNode | null) => {
            if (node === null) {
                return null;
            }
            
            dfs(node.left);
            k--
            if(k === 0){
                res = node.val
            }
            

            dfs(node.right);
        };
        dfs(root);
        return res;
    }
}
