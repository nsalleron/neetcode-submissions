class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const q = [];
        let visited = new Set()

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.push([r, c]);
                    visited.add(`${r},${c}`)
                }
            }
        }

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let front = 0;
        let dist = 0
        while (q.length > front) {
            const qLen = q.length - front;
            for (let i = 0; i < qLen; i++) {
                const [r, c] = q[front++];

                
                grid[r][c] = dist

                for (let [rP, cP] of directions) {
                    const newRow = r + rP;
                    const newCol = c + cP;

                    if (
                        newRow < 0 ||
                        newCol < 0 ||
                        newRow === ROWS ||
                        newCol === COLS ||
                        grid[newRow][newCol] === -1 || 
                        visited.has(`${newRow},${newCol}`)
                    ) {
                        continue;
                    }

                    visited.add(`${newRow},${newCol}`)
                    q.push([newRow, newCol])
                }
            }

            dist ++

        }
    }
}
