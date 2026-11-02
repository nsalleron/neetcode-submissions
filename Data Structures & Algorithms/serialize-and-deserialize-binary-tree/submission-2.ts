/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number;
 *     left: TreeNode | null;
 *     right: TreeNode | null;
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string (level-by-level JSON).
     */
    serialize(root: TreeNode | null): string {

        const res: string[] = []
        const dfs = (node: TreeNode | null) => {
            if(node === null){
                res.push('N')
                return
            }

            res.push(`${node.val}`)
            dfs(node.left)
            dfs(node.right)

        }

        dfs(root)

        return res.join(",")
    }


    i: number
    /**
     * Decodes your encoded data back to a tree.
     */
    deserialize(data: string): TreeNode | null {
        const vals = data.split(',')
        this.i = 0

        const dfs = () => {
            if(vals[this.i] === 'N'){
                this.i += 1
                return null
            }

            const node = new TreeNode(parseInt(vals[this.i++]))
            node.left = dfs()
            node.right = dfs()

            return node
        }
        return dfs()

    }
}
