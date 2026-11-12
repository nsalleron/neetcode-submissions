class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let res = 0;

        const COLS = grid[0].length;
        const ROWS = grid.length;

        const origins = new Set();

        const dfs = (row: number, col: number, origin: string | null) => {
            const key = `${row},${col}`;
            if (Math.min(row, col) < 0 || row >= ROWS || col >= COLS || grid[row][col] === "0" || grid
            [row][col] === '#') {
                return;
            }

            if (origin === null) {
                origins.add(key);
            }

            grid[row][col] = '#'
            dfs(row - 1, col, key);
            dfs(row + 1, col, key);
            dfs(row, col - 1, key);
            dfs(row, col + 1, key);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, null);
            }
        }

        return origins.size;
    }
}
