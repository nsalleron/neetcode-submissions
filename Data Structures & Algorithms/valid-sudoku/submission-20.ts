class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map()
        const cols = new Map()
        const squares = new Map()


        for(let r = 0; r < 9; r++ ){
            for(let c = 0; c < 9; c++){
                const val = board[r][c]
                if(val === '.')
                    continue

                const squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

                if(rows.has(r) && rows.get(r).has(val) ||
                    cols.has(c) && cols.get(c).has(val) ||

                    squares.has(squareKey) && squares.get(squareKey).has(val)
                ){
                    return false
                }

                if(!rows.has(r)){
                    rows.set(r, new Set())
                }
                if(!cols.has(c)){
                    cols.set(c, new Set())
                }
                if(!squares.has(squareKey)){
                    squares.set(squareKey, new Set())
                } 

                rows.get(r).add(val)
                cols.get(c).add(val)
                squares.get(squareKey).add(val)
            }
        }
        return true

    }
}
