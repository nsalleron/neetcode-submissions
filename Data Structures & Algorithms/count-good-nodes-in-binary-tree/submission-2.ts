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

        const dfs = (current: TreeNode | null, max: number) => {
            if(current === null){
                return
            }

            if(current.val >= max){
                res += 1
            }

            dfs(current.left, Math.max(current.val, max))
            dfs(current.right, Math.max(current.val, max))
        }

        dfs(root, root.val)

        return res
    }
}
