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

        words.forEach((w) => this.addWord(w));


        const res = [];
        let COLS = board[0].length;
        let ROW = board.length;

        const stack = [];

        const dfs = (row: number, col: number, node: WordTrie) => {
            if (Math.min(row, col) < 0 || row >= ROW || col >= COLS || board[row][col] === "#") {
                return;
            }

            const currentLetter = board[row][col];
            let nextNode = node.children.get(currentLetter);

            if (!nextNode) {
                return;
            }

            board[row][col] = "#";
            stack.push(currentLetter);

            if (nextNode.word) {
                res.push(stack.join(""));
                nextNode.word = false;
            }

            dfs(row - 1, col, nextNode);
            dfs(row + 1, col, nextNode);
            dfs(row, col - 1, nextNode);
            dfs(row, col + 1, nextNode);

            stack.pop();
            board[row][col] = currentLetter;
        };

        for (let r = 0; r < ROW; r++) {
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
