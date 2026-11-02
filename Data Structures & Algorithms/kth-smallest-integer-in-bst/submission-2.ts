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
        let stack = []
        let current = root

        while(stack.length > 0 || current !== null){
            while(current!= null){
                stack.push(current)
                current = current.left
            }

            current = stack.pop()!
            k--

            if(k === 0){
                return current.val
            }

            current = current.right
        }

        return -1
    }
}