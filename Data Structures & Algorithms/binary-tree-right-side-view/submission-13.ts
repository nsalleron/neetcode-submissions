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
        let res = []

        let stack = [root]
        let front = 0

        while(front < stack.length){
            const stackLen = stack.length - front
            const level = []
            for(let i = 0; i < stackLen; i++){
                const node = stack[front++]

                if(node.left){
                    stack.push(node.left)
                }

                if(node.right){
                    stack.push(node.right)
                }

                level.push(node.val)
            }

            res.push(level[level.length - 1])
        }

        return res
    }
}
