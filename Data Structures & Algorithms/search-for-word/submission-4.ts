class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        let isPresent = false

        const ROW = board.length
        const COL = board[0].length

        const backtrack = (row: number, col: number, index: number) => {
            if(row < 0 || col < 0 || row >= ROW || col >= COL || board[row][col] === '#'){
                return false
            }

            if (board[row][col] !== word[index]) {
                return false;
            }

            if (index === word.length - 1) {
                isPresent = true;
            }
           

            const original = board[row][col]
            board[row][col] = '#'

            backtrack(row + 1, col, index + 1) ||
            backtrack(row - 1, col, index + 1) ||
            backtrack(row, col + 1, index + 1) ||
            backtrack(row, col - 1, index + 1)

            board[row][col] = original
        }

        for(let row = 0; row < ROW; row++){
            for(let col = 0; col < COL; col++){
                if(board[row][col] === word[0]){
                    backtrack(row, col, 0)
                }
            }
        }

        return isPresent
    }
}
