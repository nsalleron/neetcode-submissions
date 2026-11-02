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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (root === null) {
            return [];
        }
        let stack = [];
        stack.push(root);
        const res = [root.val];
        let front = 0;

        while (front < stack.length) {
            let stackLen = stack.length;
            let level = [];
            let count = stackLen - front;
            for (let i = 0; i < count; i++) {
                const node = stack[front++];
                if (node?.left) {
                    level.push(node.left);
                }
                if (node?.right) {
                    level.push(node.right);
                }
            }
            if (level.length > 0) {
                res.push(level[level.length - 1].val);
            }
            stack.push(...level);
        }

        return res;
    }
}
