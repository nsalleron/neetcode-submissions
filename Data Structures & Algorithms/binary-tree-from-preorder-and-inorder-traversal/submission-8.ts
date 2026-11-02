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
        const inorderMap = new Map<number, number>();
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        let preIdx = 0;

        const helper = (left: number, right: number): TreeNode | null => {
            if (left > right) return null;

            const current = preorder[preIdx++];
            const node = new TreeNode(current);
            const mid = inorderMap.get(current)!;

            node.left = helper(left, mid - 1);
            node.right = helper(mid + 1, right);

            return node;
        };

        return helper(0, inorder.length - 1);
    }
}