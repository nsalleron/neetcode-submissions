class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const COLS = grid[0].length;
        const ROWS = grid.length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let islands = 0

        const dfs = (row: number, col: number) => {
            if (Math.min(row, col) < 0 || row >= ROWS || col >= COLS || grid[row][col] === "0" || grid
            [row][col] === '#') {
                return;
            }

        
            grid[row][col] = '#'
            for (const [dr, dc] of directions) {
                dfs(row + dr, col + dc);
            }
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] == '1') {
                    dfs(r, c)
                    islands++
                }
            }
        }

        return islands;
    }
}
