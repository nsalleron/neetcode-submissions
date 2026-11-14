class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        let res = false;

        const ROWS = board.length;
        const COLS = board[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r: number, c: number, index: number) => {
            if (
                Math.min(r, c) < 0 ||
                r === ROWS ||
                c === COLS ||
                board[r][c] !== word[index] ||
                board[r][c] === "#"
            ) {
                return;
            }

            if (index === word.length - 1 && board[r][c] === word[word.length - 1]) {
                res = true;
                return 
            }

            const currentLetter = board[r][c]
            board[r][c] = "#"
            for(let [rP, cP] of directions){
                dfs(r+rP, c+cP, index + 1)
            }
            board[r][c] = currentLetter

        };

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                dfs(r, c, 0);
            }
        }

        return res;
    }
}
