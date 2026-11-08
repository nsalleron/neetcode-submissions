class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const col = new Set()
        const posDiag = new Set() // R + C
        const negDiag = new Set() // R - C

        const res = []
        const board = Array.from({length: n}, () => new Array(n).fill("."))

        const backtrack = (r:number) => {
            if(r === n){
                res.push(board.map((e) => e.join("")))
                return
            }

            for(let colIdx = 0; colIdx < n; colIdx++){
                if(col.has(colIdx) || posDiag.has(r+colIdx) || negDiag.has(r-colIdx)){
                    continue
                }

                col.add(colIdx)
                posDiag.add(r+colIdx)
                negDiag.add(r-colIdx)
                board[r][colIdx] = 'Q'

                backtrack(r + 1)

                col.delete(colIdx)
                posDiag.delete(r+colIdx)
                negDiag.delete(r-colIdx)
                board[r][colIdx] = '.'
            }
        }

        backtrack(0)

        return res

    }
}
