class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const ROWS = board.length
        const COLS = board[0].length
        let res = false

        const backtrack = (row:number, col:number, previousWord: string) => {
            if(Math.min(row, col) < 0 || row >= ROWS || col >= COLS || board[row][col] === '#'){
                return
            }

            const currentLetter = board[row][col]
            board[row][col] = '#'
            
            const newWord = previousWord + currentLetter
            if(newWord === word){
                res = true
                return
            }

            backtrack(row - 1, col, newWord)
            backtrack(row + 1, col, newWord)
            backtrack(row, col - 1, newWord)
            backtrack(row, col + 1, newWord)
            
            board[row][col] = currentLetter
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                backtrack(r, c, "")
            }
        }

        return res
    }
}
