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
        if(root === null){
            return []
        }
        const queue = [root];
        let front = 0;
        const res = [root.val];

        while (front < queue.length) {
            let count = queue.length - front;
            let level = [];

            for (let i = 0; i < count; i++) {
                const node = queue[front++];

                if (node.left !== null) {
                    level.push(node.left);
                }

                if (node.right !== null) {
                    level.push(node.right);
                }
                
            }
            if(level.length > 0){
                res.push(level[level.length - 1].val);
                queue.push(...level);
            }
        }

        return res;
    }
}
