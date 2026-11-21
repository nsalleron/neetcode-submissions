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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(root === null){
            return []
        }
        const q = [root];
        let front = 0;
        const res = [];
        while (q.length > front) {
            const len = q.length - front;
            const previous = []
            const level: TreeNode[] = [];

            for (let i = 0; i < len; i++) {
                const node = q[front++];

                previous.push(node.val)

                if (node.left) {
                    level.push(node.left);
                }
                if (node.right) {
                    level.push(node.right);
                }
            }
            res.push(previous);
            q.push(...level);
        }

        return res;
    }
}
