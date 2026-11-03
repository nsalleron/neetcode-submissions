class TrieNode {
    children: Map<string, TrieNode> = new Map();
    word: boolean = false;

    addWord(word: string): void {
        let current: TrieNode = this;

        for (const c of word) {
            if (!current.children.has(c)) {
                current.children.set(c, new TrieNode());
            }
            current = current.children.get(c);
        }

        current.word = true;
    }
}

class Solution {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        let current = this.root;
        for (let word of words) {
            current.addWord(word)
        }

        const ROWS = board.length;
        const COLS = board[0].length;

        const res = new Set<string>()
        const visit = new Set()

        const dfs = (row: number, col: number, node: TrieNode, word) => {
            const key = `${row},${col}`
            if(
                row < 0 || 
                col < 0 || 
                row >= ROWS ||
                col >= COLS ||
                visit.has(key) ||
                !node.children.has(board[row][col])
            ){
                return;
            }

            visit.add(key)
            node = node.children.get(board[row][col])
            word += board[row][col]
            if(node.word){
                res.add(word)
            }

            dfs(row + 1, col, node, word)
            dfs(row - 1, col, node, word)
            dfs(row, col + 1, node, word)
            dfs(row, col - 1, node, word)


            visit.delete(key)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, current, '');
            }
        }

        return Array.from(res)
    }
}
