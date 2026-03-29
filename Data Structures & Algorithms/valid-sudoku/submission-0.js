class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set())
        const cols = Array.from({length: 9}, () => new Set())
        const square = Array.from({length: 9}, () => new Set())

        for(let i = 0; i < rows.length; i++) {
            for(let j = 0; j < cols.length; j++){
                if(board[i][j] === "."){
                    continue
                }

                const index = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if(rows[i].has(board[i][j]) ||
                    cols[j].has(board[i][j]) ||
                    square[index].has(board[i][j])
                ){
                    return false
                }

                rows[i].add(board[i][j])
                cols[j].add(board[i][j])
                square[index].add(board[i][j])
            }
        }

        return true

    }
}
