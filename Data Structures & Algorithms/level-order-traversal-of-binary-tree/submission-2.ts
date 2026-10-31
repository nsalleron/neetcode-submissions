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
        const q = []
        q.push(root)
        let front = 0

        
        while(front < q.length){
            const len = q.length - front
            let level = []
            for(let i = 0; i < len; i++){
                const node = q.shift()
                if(node){
                    q.push(node.left, node.right)
                    level.push(node.val)
                }
            }
              if(level.length !== 0){
                    res.push(level)
                }
        }

        return res 




    }
}
