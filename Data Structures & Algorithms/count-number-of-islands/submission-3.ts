class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let res = 0;

        const ROWs = grid.length;
        const COLS = grid[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r, c, index) => {
            if (Math.min(r, c) < 0 || r === ROWs || c === COLS || grid[r][c] === "0") {
                return;
            }

            grid[r][c] = "0";

            if (index === 0) {
                res += 1;
            }

            for (let [rP, cP] of directions) {
                dfs(r + rP, c + cP, index + 1);
            }
        };

        for (let r = 0; r < ROWs; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === "1") {
                    dfs(r, c, 0);
                }
            }
        }

        return res;
    }
}
