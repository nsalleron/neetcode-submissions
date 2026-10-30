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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {


        const dfs = (root: TreeNode | null): [boolean, number] => {
            if(root === null){
                return [true, 0]
            }

            const [isLeftBalanced, heightLeft] = dfs(root.left)
            const [isRightBalanced, heightRight] = dfs(root.right)

            const isBalanced = isLeftBalanced && isRightBalanced && Math.abs(heightLeft - heightRight) <= 1 


            return [isBalanced, Math.max(heightLeft, heightRight) + 1]
        }

        return dfs(root)[0]
    }
}
