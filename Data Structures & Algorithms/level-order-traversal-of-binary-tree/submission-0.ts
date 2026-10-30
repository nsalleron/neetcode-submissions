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
        const res = []

        let queue = []
        queue.push(root)

        while(queue.length > 0){
            let queueLength = queue.length
            const level = []

            for(let i = 0; i < queueLength; i++){
                const node = queue.shift()

                if(node){
                    level.push(node.val)
                    queue.push(node.left, node.right)
                }
                
            }

            if(level.length !== 0){
                    res.push(level)
                }
        }
        return res

    }
}
