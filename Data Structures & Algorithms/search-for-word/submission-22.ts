class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const ROWS = board.length;
        const COLS = board[0].length;

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let isPresent = false;
        const dfs = (row, col, index) => {
            //if (isPresent) return;

            if (
                row < 0 ||
                col < 0 ||
                row >= ROWS ||
                col >= COLS ||
                board[row][col] === "." ||
                word[index] !== board[row][col]
            ) {
                return;
            }

            if (index === word.length - 1 && board[row][col] === word[word.length - 1] ) {
                return (isPresent = true);
            }

            const currentLetter = board[row][col];
            board[row][col] = ".";

            for (let [rP, cP] of directions) {
                dfs(row + rP, col + cP, index + 1);
            }

            board[row][col] = currentLetter;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === word[0]) {
                    dfs(r, c, 0);
                }
            }
        }

        return isPresent;
    }
}
