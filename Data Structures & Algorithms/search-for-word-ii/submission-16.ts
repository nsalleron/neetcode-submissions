class TrieNode {
    children: Map<string, TrieNode> = new Map();
    word: string | null = null;
}

class Solution {
    private root: TrieNode = new TrieNode();

    findWords(board: string[][], words: string[]): string[] {
        this.root = new TrieNode();

        for (const word of words) {
            this.addWord(word);
        }

        const result: string[] = [];
        const rows = board.length;
        const cols = board[0].length;

        const dfs = (r: number, c: number, parent: TrieNode): void => {
            if (
                r < 0 ||
                r >= rows ||
                c < 0 ||
                c >= cols ||
                board[r][c] === "#"
            ) {
                return;
            }

            const letter = board[r][c];
            const node = parent.children.get(letter);

            // Aucun mot ne commence par ce préfixe
            if (!node) {
                return;
            }

            // Marquer la case comme visitée
            board[r][c] = "#";

            if (node.word !== null) {
                result.push(node.word);
                node.word = null;
            }

            dfs(r + 1, c, node);
            dfs(r - 1, c, node);
            dfs(r, c + 1, node);
            dfs(r, c - 1, node);

            // Restaurer la case
            board[r][c] = letter;
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, this.root);
            }
        }

        return result;
    }

    private addWord(word: string): void {
        let current = this.root;

        for (const letter of word) {
            if (!current.children.has(letter)) {
                current.children.set(letter, new TrieNode());
            }

            current = current.children.get(letter)!;
        }

        current.word = word;
    }

}