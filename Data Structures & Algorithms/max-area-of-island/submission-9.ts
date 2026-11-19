class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    directions = [
        [1,0],[-1,0],[0,1],[0,-1],
    ]

    maxAreaOfIsland(grid: number[][]): number {
        const ROWS = grid.length
        const COLS = grid[0].length

        const dfs = (r, c) => {
            if(r < 0 || c < 0 || r === ROWS || c === COLS || grid[r][c] === 0){
                return 0
            }

            grid[r][c] = 0
            let res = 0
            for(let [rP, cP] of this.directions){
                const newR = r +rP, newC = c + cP
                res += dfs(newR, newC)
            }

            return res + 1
        }

        let max = 0
        for(let r = 0; r< ROWS; r++){
            for(let c = 0; c< COLS; c++){
                if(grid[r][c] === 1){
                    max = Math.max(max, dfs(r, c))
                }
            }
        }

        return max
        
    }
}
