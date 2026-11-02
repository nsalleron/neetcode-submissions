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
        let front = 0
        stack.push(root)

        const res = [[root.val]]

        while(front < stack.length){
            let len = stack.length
            let level = [];
            const count = len - front
            for(let i = 0; i < count; i++){
                const node = stack[front ++]
                if(node?.left){
                    level.push(node.left)
                }
                if(node?.right){
                    level.push(node.right)
                }

            }

            if(level.length > 0){
                res.push(level.map((e) => e.val))
            }

            stack.push(...level)
                    }

        return res


    }
}
