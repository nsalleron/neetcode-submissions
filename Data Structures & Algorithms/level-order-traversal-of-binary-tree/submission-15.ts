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

        const res = []
        let front = 0
        const queue = []
        queue.push(root)
        while(front < queue.length){
            let qLen = queue.length
            let level = []
            for(let i = front; i < qLen; i++){
                const node = queue[front++]
                level.push(node.val)
                if(node.left){
                    queue.push(node.left)
                }

                if(node.right){
                    queue.push(node.right)
                }
            }
            if(level.length > 0){
                res.push(level)
            }
           
        }

        return res

    }
}
