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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        const map = new Map()

        const dfs = (root: TreeNode | null) => {
            if(root === null){
                return []
            }

            const left = dfs(root.left)
            const right = dfs(root.right)
            const key = [root.val, ...left, ...right].join(',')
            map.set(key, (map.get(key) || 0) + 1)

            return [root.val, ...left, ...right]

        }

        dfs(root)
        const keys = [...map.keys()]

        return keys.includes(dfs(subRoot).join(','))
    }
}
