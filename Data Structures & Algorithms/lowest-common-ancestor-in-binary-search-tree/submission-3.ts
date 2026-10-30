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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {

        let curr = root
        while(curr !== null){
            if(curr.val < p.val && curr.val < q.val){
                curr = curr.right
            } 
            if(curr.val > p.val && curr.val > q.val){
                curr = curr.left
            } else {
                return curr
            }
        }

        return null
        
    }
}
