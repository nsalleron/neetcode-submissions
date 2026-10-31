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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let n = 0
        const stack = []
        
        let current = root

        while(current !== null || stack.length > 0){
            while(current !== null){
                stack.push(current)
                current = current.left
            }

            current = stack.pop()
            n += 1
            if(n === k){
                return current.val
            }
            current = current.right
        }
    }
}
