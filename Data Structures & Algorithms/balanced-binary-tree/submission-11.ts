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

        const dfs = (root: TreeNode | null, height: number) => {
            if(root === null){
                return [true, 0]
            }

            const [isLeftBalanced, leftHeight] = dfs(root.left, height + 1)
            const [isRightBalanced, rightHeight] = dfs(root.right, height + 1)

            const isBalanced = isLeftBalanced && isRightBalanced && Math.abs((leftHeight - rightHeight)) <= 1
            return [isBalanced,  Math.max(leftHeight, rightHeight) + 1]
        }

        return dfs(root, 0)[0]
    }
}
