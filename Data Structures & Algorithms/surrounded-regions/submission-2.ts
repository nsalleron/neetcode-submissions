class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const ROWS = board.length,
            COLS = board[0].length;
        const visited = Array.from({ length: ROWS }, () =>
            Array.from({ length: COLS }, () => false),
        );

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r, c, visited) => {
            visited[r][c] = true;

            for (let [rP, cP] of directions) {
                const newRow = r + rP,
                    newCol = c + cP;
                if (
                    newRow < 0 ||
                    newRow === ROWS ||
                    newCol < 0 ||
                    newCol === COLS ||
                    visited[newRow][newCol] === true ||
                    board[newRow][newCol] === "X"
                ) {
                    continue;
                }

                board[newRow][newCol] = "T";
                dfs(newRow, newCol, visited);
            }
        };

        for (let r = 0; r < ROWS; r++) {
            if (board[r][0] === "O") {
                board[r][0] = "T";
                dfs(r, 0, visited);
            }
            if (board[r][COLS - 1] === "O") {
                board[r][COLS - 1] = "T";
                dfs(r, COLS - 1, visited);
            }
        }

        for (let c = 0; c < COLS; c++) {
            if (board[0][c] === "O") {
                board[0][c] = "T";
                dfs(0, c, visited);
            }
            if (board[ROWS - 1][c] === "O") {
                board[ROWS - 1][c] = "T";
                dfs(ROWS - 1, c, visited);
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "T") {
                    board[r][c] = "O";
                } else if (board[r][c] === "O") {
                    board[r][c] = "X";
                }
            }
        }
    }
}
