const directions = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1],
]
class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const ROWS = grid.length
        const COLS = grid[0].length

        const dfs = (row, col) => {
            const key = `${row},${col}`
            if(row < 0 || col < 0 || row === ROWS || col === COLS || grid[row][col] === "0"){
                return 
            }

            grid[row][col] = '0'

            for(let [rP, cP] of directions){
                const newRow = row + rP, newCol = col + cP

                dfs(newRow, newCol)
            }

        }

        let count = 0
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === "1"){
                    count ++
                    dfs(r,c)
                }
            }
        }

        return count
    }
}
