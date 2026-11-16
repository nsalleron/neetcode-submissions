class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let visit = new Set();
        let q = [];

        const addCell = (r, c) => {
            if (
                r < 0 ||
                c < 0 ||
                r === ROWS ||
                c === COLS ||
                visit.has(`${r},${c}`) ||
                grid[r][c] === -1
            ) {
                return;
            }
            visit.add(`${r},${c}`);
            q.push([r, c]);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.push([r, c])
                    visit.add(`${r},${c}`)
                }
            }
        }

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
        let dist = 0
        let front = 0
        while(q.length > front){
            let len = q.length - front;
            for(let i = 0; i < len; i++){
                let [r, c] = q[front++]
                grid[r][c] = dist
                for(let [rP, cP] of directions){
                    addCell(r + rP, c+cP)
                }
            }
            dist += 1
        }
    }
}
