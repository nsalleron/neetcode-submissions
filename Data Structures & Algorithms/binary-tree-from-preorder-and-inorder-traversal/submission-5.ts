class Solution {
    buildTree(preorder, inorder) {
        let preIndex = 0;

        // Associe chaque valeur de inorder à son index
        const inorderMap = new Map();
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        const dfs = (left, right) => {
            if (left > right) {
                return null;
            }

            // Le prochain élément de preorder est la racine
            const rootVal = preorder[preIndex++];
            const root = new TreeNode(rootVal);

            // Position de la racine dans inorder
            const mid = inorderMap.get(rootVal);

            // Construire d'abord le sous-arbre gauche
            root.left = dfs(left, mid - 1);

            // Puis le sous-arbre droit
            root.right = dfs(mid + 1, right);

            return root;
        };

        return dfs(0, inorder.length - 1);
    }
}
