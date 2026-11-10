class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const col = new Set()
        const posDiag = new Set()
        const negDiag = new Set()
        
        const res = []
        const board = Array.from({length: n}, () => new Array(n).fill('.'))
 
        const dfs = (row: number) => {
            if(row === n){
                return res.push(board.map((e) => e.join("")))
            }

            for(let colIdx = 0; colIdx < n; colIdx++){
                if(col.has(colIdx) || posDiag.has(row+colIdx) || negDiag.has(row-colIdx)){
                    continue
                }

                col.add(colIdx)
                posDiag.add(row+colIdx)
                negDiag.add(row-colIdx)

                board[row][colIdx] = 'Q'
                dfs(row + 1)

                col.delete(colIdx)
                posDiag.delete(row+colIdx)
                negDiag.delete(row-colIdx)

                board[row][colIdx] = '.'
            }
        }

        dfs(0)

        return res
    }
}
