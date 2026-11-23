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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const res = [];

        const dfs = (node: TreeNode | null) => {
            if (!node) {
                return res.push("N");
            }

            res.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        const preorder = data.split(",");

        let index = 0;

        const dfs = () => {
            if (index == preorder.length || preorder[index] === "N") {
                index++;
                return null;
            }

            const node = new TreeNode(parseInt(preorder[index++]));
            node.left = dfs();
            node.right = dfs();

            return node;
        };

        return dfs();
    }
}
