class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let res = 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r, c) => {
            if (Math.min(r, c) < 0 || r === ROWS || c === COLS || grid[r][c] === 0) {
                return 0;
            }

            grid[r][c] = 0
            
            let res = 0

            for (let [rP, cP] of directions) {
                res += dfs(r + rP, c + cP);
            }

            return res + 1;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    res = Math.max(res, dfs(r, c));
                }
            }
        }

        return res
    }
}
