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

        let res = 0

        const dfs = (node: TreeNode, max: number) => {
            if(node === null){
                return 
            }

            if(node.val >= max){
                res += 1
            }
            
            dfs(node.left, Math.max(node.val, max))
            dfs(node.right, Math.max(node.val, max))
        }

        dfs(root, root.val)

        return res
    }
}
