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
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {

        const dfs = (node: TreeNode | null, parent: number) => {
            if (node === null) {
                return 0;
            }

            let left = dfs(node.left, Math.max(node.val, parent))
            let right = dfs(node.right, Math.max(node.val,parent))
            let current = (node.val >= parent ? 1 : 0)


            return current + left + right;

        };

        

        return dfs(root, root.val);
    }
}
