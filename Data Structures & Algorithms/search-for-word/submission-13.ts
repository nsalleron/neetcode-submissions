class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const ROWS = board.length
        const COLS = board[0].length

        let directions = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1],
        ]

        let isPresent = false
        const part = []
        const dfs = (row, col) => {
            if(part.length === word.length && part.join('') === word){
                return isPresent = true
            }

            if(row < 0 || col < 0 || row === ROWS || col === COLS || board[row][col] === '.'){
                return
            }

            const currentLetter = board[row][col]
            board[row][col] = '.'
            part.push(currentLetter)

            for(let [rP, cP] of directions){
                dfs(row + rP, col + cP)
            }

            board[row][col] = currentLetter
            part.pop()
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(board[r][c] === word[0]){
                    dfs(r,c)              
                }
            }
        }

        return isPresent


    }
}
