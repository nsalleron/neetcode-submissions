class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const q = [];
        let fresh = 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                }
                if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }
        let time = 0;
        let front = 0;
        while (fresh > 0 && q.length > front) {
            time++;
            const qLen = q.length - front;
            for (let i = 0; i < qLen; i++) {

                const [r, c] = q[front++];

                for (let [rP, cP] of directions) {
                    const newRow = r + rP;
                    const newCol = c + cP;
                    if (
                        newRow >= 0 &&
                        newRow < ROWS &&
                        newCol >= 0 &&
                        newCol < COLS &&
                        grid[newRow][newCol] === 1
                    ) {
                        grid[newRow][newCol] = 2;
                        fresh--;
                        q.push([newRow, newCol]);
                    }
                }
            }

        }

        console.log({q, front, time, fresh})
        return fresh > 0 ? -1 : time;
    }
}
