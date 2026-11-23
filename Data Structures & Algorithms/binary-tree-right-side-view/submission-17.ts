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
        if(root === null) return []
        const res = []
        const q = [root]
        let front = 0

        while(q.length > front){
            const len = q.length - front
            let lastNode = null
            for(let i = 0; i < len; i++){
                const node = q[front++]

                lastNode = node.val
                if(node.left){
                    q.push(node.left)
                }
                if(node.right){
                    q.push(node.right)
                }
            }
            res.push(lastNode)
        }

        return res
    }
}
