class WordTrie {
    children = new Map<string, WordTrie>();
    word = false;
}

class Solution {
    root: WordTrie;
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        this.root = new WordTrie();
        const res = [];
        const ROWS = board.length;
        const COLS = board[0].length;

        words.forEach((w) => this.addWord(w));

        const stack = []
        const dfs = (row: number, col: number, current: WordTrie) => {
            if (Math.min(row, col) < 0 || row >= ROWS || col >= COLS || board[row][col] === "#") {
                return null;
            }

            const currentLetter = board[row][col];
            const wordTrie = current.children.get(currentLetter);
            if (!wordTrie) {
                return null;
            }

            board[row][col] = "#";
            stack.push(currentLetter)


            if (wordTrie.word) {
                res.push(stack.join("")); 
                wordTrie.word = false
            }


            dfs(row + 1, col, wordTrie);
            dfs(row - 1, col, wordTrie);
            dfs(row, col + 1, wordTrie);
            dfs(row, col - 1, wordTrie);
            stack.pop()

            board[row][col] = currentLetter;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, this.root);
            }
        }

        return res;
    }

    addWord(word: string) {
        let current = this.root;
        for (let c of word) {
            if (!current.children.has(c)) {
                current.children.set(c, new WordTrie());
            }
            current = current.children.get(c);
        }
        current.word = true;
    }
}
