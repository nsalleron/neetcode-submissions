class Solution {
    /**
     * @param {character[][]}
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const ROWS = board.length;
        const COLS = board[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r:number, c:number) => {
            board[r][c] = "WTF";

            for (let [rP, cP] of directions) {
                const newRow = r + rP;
                const newCol = c + cP;

                if (
                    newRow < 0 ||
                    newCol < 0 ||
                    newRow === ROWS ||
                    newCol === COLS ||
                    board[newRow][newCol] === "X" ||
                    board[newRow][newCol] === "WTF"
                ) {
                    continue;
                }

                dfs(newRow, newCol);
            }
        };

        for (let r = 0; r < ROWS; r++) {
            if (board[r][0] === "O") {
                dfs(r, 0);
            }
            if (board[r][COLS - 1] === "O") {
                dfs(r, COLS - 1);
            }
        }

        for (let c = 0; c < COLS; c++) {
            if (board[0][c] === "O") {
                dfs(0, c);
            }
            if (board[ROWS - 1][c] === "O") {
                dfs(ROWS - 1, c);
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                }
                if (board[r][c] === "WTF") {
                    board[r][c] = "O";
                }
            }
        }
    }
}