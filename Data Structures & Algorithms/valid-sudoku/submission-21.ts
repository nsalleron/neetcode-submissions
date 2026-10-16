class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map()
        const cols = new Map()
        const squares = new Map()

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                const cell = board[r][c]
                if(cell === '.')
                    continue

                const row = rows.get(r) ?? new Set();
                const col = cols.get(c) ?? new Set();
                
                const key  = `${Math.floor(r / 3)},${Math.floor(c/3)}`
                const square = squares.get(key) ?? new Set()
                if (row.has(cell) || col.has(cell) || square.has(cell)) {
                    return false;
                }

                row.add(cell);
                col.add(cell);
                square.add(cell)

                rows.set(r, row);
                cols.set(c, col);
                squares.set(key, square)
            }
        }
        return true
    }
}
