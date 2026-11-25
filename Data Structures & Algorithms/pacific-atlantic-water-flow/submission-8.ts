class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ROWS = heights.length
        const COLS = heights[0].length
        
        const directions = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1]
        ]
        const pac = new Map<string,number[]>()
        const atl = new Map<string,number[]>()

        const dfs = (r, c, ocean: Map<string, number[]>) => {
            const key = `${r},${c}`
            if(ocean.has(key)){
                return 
            }

            ocean.set(key, [r, c])

            for(let [rP, cP] of directions){
                const newR = r + rP
                const newC = c + cP
                if(newR >= 0 && newC >= 0 && newR < ROWS && newC < COLS && heights[newR][newC] >= heights[r][c]){
                    dfs(r + rP, c+cP, ocean)
                }
            }
        }

        for(let r = 0; r < ROWS; r++){
            dfs(r, 0, pac)
            dfs(r, COLS - 1, atl)
        }
        for(let c = 0; c < COLS; c++){
            dfs(0, c, pac)
            dfs(ROWS - 1, c, atl)
        }

        const res = []
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                const key = `${r},${c}`
                if(pac.has(key) && atl.has(key)){
                    res.push(pac.get(`${r},${c}`))
                }
            }
        }

        return res
    }
}
