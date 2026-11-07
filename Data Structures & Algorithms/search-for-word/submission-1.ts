class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const stack = []
        let isPresent = false

        const ROW = board.length
        const COL = board[0].length

        const backtrack = (row: number, col: number) => {
            if(stack.length === word.length && stack.join("") === word){
                isPresent = true
            }
            
            if(row < 0 || col < 0 || row >= ROW || col >= COL || board[row][col] === '#'){
                return
            }

            

            const currentLetter = board[row][col]
            stack.push(currentLetter)
            board[row][col] = '#'

            backtrack(row + 1, col)
            backtrack(row - 1, col)
            backtrack(row, col + 1)
            backtrack(row, col - 1)

            stack.pop()
            board[row][col] = currentLetter
        }

        for(let row = 0; row < ROW; row++){
            for(let col = 0; col < COL; col++){
                backtrack(row, col)
            }
        }

        return isPresent
    }
}
