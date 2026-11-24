class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const INF = 2147483647

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
        const ROWS = grid.length
        const COLS = grid[0].length

        const q = []
        let front = 0
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 0){
                    q.push([r,c])
                }
            }
        }
        
        
        let pathToTreasure = 1
        while(q.length > front){
            const len = q.length - front
            for(let i = 0; i < len; i++){
                const [row, col] = q[front++]

                for(let [rP, cP] of directions){
                    const newRow = row + rP
                    const newCol = col + cP

                    if(newRow >= 0 && newCol >= 0 && newRow < ROWS && newCol < COLS && grid[newRow][newCol] === INF){
                        grid[newRow][newCol] = pathToTreasure
                        q.push([newRow,newCol])
                    }
                }
            }
            pathToTreasure ++
        }

    }
}
