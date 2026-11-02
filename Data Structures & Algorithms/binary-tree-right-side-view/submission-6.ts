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
        let stack = []
        stack.push(root)
        const res = [root.val]
        
        while(stack.length > 0){
            // console.log({stack})
            let stackLen = stack.length
            let level = []
            for(let i = 0; i < stackLen; i++){
                const node = stack.shift()
                if(node.left !== null){
                    level.push(node.left)
                }
                if(node.right !== null){
                    level.push(node.right)
                }
            }
            // console.log(level)
            if(level.length > 0){
                res.push(level[level.length - 1].val)
                
            }
            stack = level
        }

        return res

    }
}
