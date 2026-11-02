class Codec {
    serialize(root: TreeNode | null): string {
        if (!root) return "[]";

        const queue: (TreeNode | null)[] = [root];
        const result: (number | null)[] = [];

        while (queue.length > 0) {
            const node = queue.shift();
            if (node) {
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                result.push(null);
            }
        }

        // Trim trailing nulls
        while (result[result.length - 1] === null) {
            result.pop();
        }

        return JSON.stringify(result);
    }

    deserialize(data: string): TreeNode | null {
        if (!data || data === "[]") return null;

        const vals: (number | null)[] = JSON.parse(data);
        if (!vals.length || vals[0] === null) return null;

        const root = new TreeNode(vals[0]);
        const queue: TreeNode[] = [root];
        let idx = 1;

        while (queue.length > 0 && idx < vals.length) {
            const parent = queue.shift()!;

            // Left
            if (idx < vals.length && vals[idx] !== null) {
                parent.left = new TreeNode(vals[idx]!);
                queue.push(parent.left);
            }
            idx++;

            // Right
            if (idx < vals.length && vals[idx] !== null) {
                parent.right = new TreeNode(vals[idx]!);
                queue.push(parent.right);
            }
            idx++;
        }

        return root;
    }
}
