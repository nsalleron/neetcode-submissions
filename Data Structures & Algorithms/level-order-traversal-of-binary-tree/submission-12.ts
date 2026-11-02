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
        if(root === null) return []
        const res = []
        const queue = [root]
        let front = 0

        while(front < queue.length){
            const count = queue.length - front
            const level = []
            for(let i = 0; i < count; i++){
                const node = queue[front++]
                if(node.left !== null){
                    queue.push(node.left)
                }

                if(node.right !== null){
                    queue.push(node.right)
                }

                level.push(node.val)
            }
            res.push(level)
        }

        return res
    }
}
