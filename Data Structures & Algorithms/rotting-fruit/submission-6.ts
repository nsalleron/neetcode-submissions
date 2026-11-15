class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let minutes = -1;
        let fresh = 0;
        let front = 0;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const queue: [number, number][] = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        if (!fresh) return 0;

        while (queue.length > front) {
            const levelSize = queue.length - front;
            for (let i = 0; i < levelSize; i++) {
                const [row, col] = queue[front++];
                for (let [rP, cP] of directions) {
                    const newRow = row + rP;
                    const newCol = col + cP;

                    if (
                        newRow >= 0 &&
                        newRow < ROWS &&
                        newCol >= 0 &&
                        newCol < COLS &&
                        grid[newRow][newCol] === 1
                    ) {
                        grid[newRow][newCol] = 2;
                        fresh--;
                        queue.push([newRow, newCol]);
                    }
                }
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
