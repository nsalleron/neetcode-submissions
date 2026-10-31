class Solution {
    lowestCommonAncestor(
        root: TreeNode,
        p: TreeNode,
        q: TreeNode
    ): TreeNode {
        const low = Math.min(p.val, q.val);
        const high = Math.max(p.val, q.val);

        let current = root;

        while (current.val < low || current.val > high) {
            if (current.val < low) {
                current = current.right!;
            } else {
                current = current.left!;
            }
        }

        return current;
    }
}