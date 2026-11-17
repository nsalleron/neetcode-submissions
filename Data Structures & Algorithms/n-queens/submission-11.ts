class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const board = Array.from({length: n}, () => Array.from({length: n}, () => '.'))

        const col = new Set()
        const negDiag = new Set()
        const posDiag = new Set()

        const res = []

        const dfs = (row: number) => {
            if(row === n){
                return res.push(board.map((e) => e.join('')))
            }

            for(let c = 0; c < n; c++){
                if(col.has(c) || negDiag.has(row - c) || posDiag.has(row + c)){
                    continue
                }

                col.add(c)
                negDiag.add(row - c)
                posDiag.add(row + c)

                board[row][c] = 'Q'

                dfs(row + 1)

                col.delete(c)
                negDiag.delete(row - c)
                posDiag.delete(row + c)

                board[row][c] = '.'
            }

        }


        dfs(0)        

        return res
    }
}
