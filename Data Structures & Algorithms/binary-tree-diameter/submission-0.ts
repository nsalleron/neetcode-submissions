/**
 * Definition for a binary tree node. */
//  class TreeNode {
//     val: number
//     left: TreeNode
//     right: TreeNode
//      constructor(val = 0, left = null, right = null) {
//          this.val = val;
//          this.left = left;
//          this.right = right;
//      }
//  }

class Solution {
    res = 0;

    dfs(root: TreeNode | null): number {
        if (root === null) {
            return 0;
        }

        let left = this.dfs(root.left);
        let right = this.dfs(root.right);

        this.res = Math.max(this.res, left + right);

        return 1 + Math.max(left, right);
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        this.dfs(root);

        return this.res;
    }
}
