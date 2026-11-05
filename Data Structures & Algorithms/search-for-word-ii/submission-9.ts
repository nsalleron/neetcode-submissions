class TrieNode {
    children: Map<string, TrieNode> = new Map();
    word: boolean = false;
}

class Solution {
    root: TrieNode;
    constructor() {
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        this.root = new TrieNode();

        const foundWords: Set<string> = new Set();
        const visit = new Set<string>();
        for (let word of words) {
            this.addWord(word);
        }

        const dfs = (row: number, col: number, word: string, current: TrieNode) => {
            const KEY = `${row},${col}`;
            if (
                row >= board.length ||
                row < 0 ||
                col >= board[0].length ||
                col < 0 ||
                visit.has(KEY) ||
                !current
            ) {
                return;
            }

            visit.add(KEY)
            const currentLetter = board[row][col];
            const node = current.children.get(currentLetter);
            
            word += currentLetter
            if (node && node.word) {
                foundWords.add(word);
                node.word = false;
            }

            dfs(row + 1, col, word, node);
            dfs(row - 1, col, word, node);
            dfs(row, col + 1, word, node);
            dfs(row, col - 1, word, node);

            visit.delete(KEY)
        };

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                dfs(r, c, "", this.root);
            }
        }

        return [...foundWords.values()];
    }

    addWord(word: string): void {
        let current: TrieNode = this.root;

        for (const c of word) {
            if (!current.children.has(c)) {
                current.children.set(c, new TrieNode());
            }
            current = current.children.get(c);
        }

        current.word = true;
    }
}
