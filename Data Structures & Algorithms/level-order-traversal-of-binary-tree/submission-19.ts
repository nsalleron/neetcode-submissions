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
            const level: TreeNode[] = [];

            for (let i = 0; i < len; i++) {
                const node = q[front++];

                if(node !== null){
                    level.push(node.val)
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if(level.length > 0){
                res.push(level);
            }
        }

        return res;
    }
}
