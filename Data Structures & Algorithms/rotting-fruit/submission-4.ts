class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let res = 0;
        let fresh = 0;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const queue: [number, number, number][] = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c, 0]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        while (queue.length > 0) {
            const [row, col, index] = queue.shift();
            for (let [rP, cP] of directions) {
                const newRow = row + rP;
                const newCol = col + cP;
                if (
                    Math.min(newRow, newCol) < 0 ||
                    newRow === ROWS ||
                    newCol === COLS
                ) {
                    continue;
                }

                if (grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    fresh--;
                    queue.push([newRow, newCol, index + 1]);
                    res = Math.max(res, index + 1);
                }
            }
        }

        return fresh === 0 ? res : -1;
    }
}