class Trie {
    children: Map<string, Trie> = new Map();
    word = false;
}

class Solution {
    root: Trie;
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        this.root = new Trie();

        for (let w of words) {
            this.addWord(w);
        }

        const ROW = board.length;
        const COL = board[0].length;

        const res = []

        const dfs = (row: number, col: number, current: Map<string, Trie>, previous: string) => {

            if (row < 0 || col < 0 || row >= ROW || col >= COL || board[row][col] == "#" || current === undefined) {
                return;
            }

            const currentLetter = board[row][col]
            if(!current.has(currentLetter)){
                return
            }

            board[row][col] = '#'
            const node = current.get(currentLetter)
            const newWord = previous + currentLetter
            if(node.word){
                res.push(newWord)
                node.word = false
            }

            dfs(row - 1, col, node.children, newWord)
            dfs(row + 1, col, node.children, newWord)
            dfs(row, col + 1, node.children, newWord)
            dfs(row, col - 1, node.children, newWord)

            board[row][col] = currentLetter
        };

        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
                dfs(r, c, this.root.children, "");
            }
        }

        return res
    }

    addWord(s: string): void {
        let current = this.root;
        for (let c of s) {
            if (!current.children.has(c)) {
                current.children.set(c, new Trie());
            }
            current = current.children.get(c);
        }
        current.word = true;
    }
}
