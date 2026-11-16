class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let res = 0;

        let fresh = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const queue = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
                if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let front = 0

        while (fresh > 0 && front < queue.length) {
            const length = queue.length - front;
            for (let i = 0; i < length; i++) {
                const [row, col] = queue[front++];

                for (let [rP, cP] of directions) {
                    const newR = row + rP;
                    const newC = col + cP;

                    if (newR < 0 || newC < 0 || newC === COLS || newR === ROWS) {
                        continue;
                    }

                    if (grid[newR][newC] === 1) {
                        grid[newR][newC] = 2;
                        queue.push([newR, newC]);
                        fresh--;
                    }
                }
            }

            res++;
        }

        return fresh === 0 ? res : -1;
    }
}
