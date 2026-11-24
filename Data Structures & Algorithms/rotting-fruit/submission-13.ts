class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let ROWS = grid.length
        let COLS = grid[0].length

        let fresh = 0 
        const q = []

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 1){
                    fresh ++
                } else if (grid[r][c] === 2){
                    q.push([r, c]) 
                }

            }
        }

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]

        
        let front = 0
        let time = 0
        while(q.length > front){
            let len = q.length - front
            for(let i = 0; i < len; i++){
                const [rottenRow, rottenCol] = q[front++]

                for(let [rP, cP] of directions){
                    const newRow = rottenRow + rP
                    const newCol = rottenCol + cP

                    if(newRow >= 0 && newCol >= 0 && newRow < ROWS && newCol < COLS && grid[newRow][newCol] === 1){
                        grid[newRow][newCol] = 2
                        fresh--
                        q.push([newRow,newCol])
                    }
                }
            }

            if(q.length > front){
                time ++
            }
        }

        return fresh > 0 ? - 1 : time
    }
}
