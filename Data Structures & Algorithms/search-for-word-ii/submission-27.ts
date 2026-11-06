class Trie {
    children: Map<string, Trie> = new Map();
    word = false;
    refs = 0
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
            const node = current.get(currentLetter)

            if(!node || node.refs <= 0){
                return
            }

            board[row][col] = '#'
            
            const newWord = previous + currentLetter
            if(node.word){
                res.push(newWord)
                node.word = false
                this.removeWord(newWord)
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
        current.refs++;
        for (let c of s) {
            if (!current.children.has(c)) {
                current.children.set(c, new Trie());
            }
            current = current.children.get(c);
            current.refs++;
        }
        current.word = true;
    }

    removeWord(word: string){
        let node = this.root;
        node.refs--

        for(const letter of word){
            node = node.children.get(letter)
            node.refs--
        }
    }
}
