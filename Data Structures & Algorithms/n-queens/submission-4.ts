class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const board = Array.from({ length: n }, () => Array.from({ length: n }, () => "."));

        const colSet = new Set<number>();
        const negDiag = new Set<number>();
        const posDiag = new Set<number>();

        const ROWS = n;
        const COLS = n;

        const res: string[][] = [];

        const dfs = (row: number) => {
            if (row === ROWS) {
                res.push(board.map((e) => e.join("")));
            }

            for (let c = 0; c < COLS; c++) {
                if (colSet.has(c) || negDiag.has(row - c) || posDiag.has(row + c)) {
                    continue;
                }

                board[row][c] = "Q";

                colSet.add(c);
                negDiag.add(row - c);
                posDiag.add(row + c);

                dfs(row + 1);
                colSet.delete(c);
                negDiag.delete(row - c);
                posDiag.delete(row + c);

                board[row][c] = ".";
            }
        };

        dfs(0);

        return res;
    }
}
