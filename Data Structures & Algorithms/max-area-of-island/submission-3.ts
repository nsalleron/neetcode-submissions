class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let maxArea = 0;

        const dfs = (row: number, col: number) => {
            if (
                Math.min(row, col) < 0 ||
                row >= ROWS ||
                col >= COLS ||
                grid[row][col] === 0
            ) {
                return 0;
            }
            grid[row][col] = 0

            let res = 1
            for(let [nR, nC] of directions){
                res += dfs(row + nR, col + nC)
            }

            return res
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, dfs(r, c));
                }
            }
        }

        return maxArea
    }
}
