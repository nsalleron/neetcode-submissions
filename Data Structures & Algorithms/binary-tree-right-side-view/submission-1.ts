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
        const res = []

        queue.push(root)

        while(queue.length > 0){
            let len = queue.length
            let level = []
            let rightSideView = null
            for(let i = 0; i < len; i ++){
                const node = queue.shift()

                if(node){
                    queue.push(node.left, node.right)
                    level.push(node.val)
                    rightSideView = node
                }
            }
            if(rightSideView)
                res.push(rightSideView.val)
           
        }

        return res
    }
}
