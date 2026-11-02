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
        let stack = []

        stack.push(root)

        const res = [[root.val]]

        while(stack.length > 0){
            let len = stack.length
            let level = []

            for(let i = 0; i < len; i++){
                const node = stack.shift()
                if(node?.left){
                    level.push(node.left)
                }
                if(node?.right){
                    level.push(node.right)
                }

            }

            if(level.length > 0){
                res.push(level.map((e) => e?.val))
            }

            stack = level
        }

        return res


    }
}
