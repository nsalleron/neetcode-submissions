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
        const queue = []
        let levels = []

        queue.push(root)
        let front = 0

        while(front < queue.length){
            let len = queue.length - front
            let level = []

            for(let i = 0; i < len; i ++){
                const node = queue[front++]

                if(node){
                    queue.push(node.left, node.right)
                    level.push(node.val)
                }
            }
            if(level.length > 0){
                levels.push(level)
            }
        }

        const res = []
        for(let i = 0; i < levels.length; i++){
            res.push(levels[i][levels[i].length - 1])
        }
        
        return res
    }
}
