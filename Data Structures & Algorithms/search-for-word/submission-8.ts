class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const ROWS = board.length;
        const COLS = board[0].length;
        let res = false;

        const backtrack = (row: number, col: number, index: number) => {
            if (
                Math.min(row, col) < 0 ||
                row >= ROWS ||
                col >= COLS ||
                board[row][col] === "#" ||
                board[row][col] !== word[index]
            ) {
                return;
            }

            const currentLetter = board[row][col];

            if (index === word.length - 1 && currentLetter === word[index]) {
                res = true;
                return;
            }

            board[row][col] = "#";

            backtrack(row - 1, col, index + 1);
            backtrack(row + 1, col, index + 1);
            backtrack(row, col - 1, index + 1);
            backtrack(row, col + 1, index + 1);

            board[row][col] = currentLetter;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                backtrack(r, c, 0);
            }
        }

        return res;
    }
}
