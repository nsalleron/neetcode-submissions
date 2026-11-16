class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const colSet = new  Set<number>()
        const posDiag = new Set<number>()
        const negDiag = new Set<number>()

        const ROWS = n
        const COLS = n
        const res = []

        const board = Array.from({length: n}, () => Array.from({length: n}, () => '.'))

        const dfs = (row: number) => {
            if(row === ROWS){
                return res.push([...board.map((e) => e.join(''))])
            }

            for(let c = 0; c < COLS; c++){
                if(colSet.has(c) || posDiag.has(row + c) || negDiag.has(row - c)){
                    continue
                }

                colSet.add(c)
                posDiag.add(row + c)
                negDiag.add(row - c)

                board[row][c] = 'Q'

                dfs(row + 1)

                board[row][c] = '.'

                colSet.delete(c)
                posDiag.delete(row + c)
                negDiag.delete(row - c)

            }
        }
        
        dfs(0)

        return res;
    }
}
