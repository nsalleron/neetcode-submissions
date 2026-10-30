class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const val = board[row][col];
                if (val === ".") {
                    continue;
                }
                const currentRow = rows.get(row) ?? new Set();
                const currentCol = cols.get(col) ?? new Set();
                 
                const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
                const square = squares.get(key) ?? new Set();

                rows.set(row, currentRow);
                cols.set(col, currentCol);
                squares.set(key, square);

                if (currentRow.has(val) || currentCol.has(val) || square.has(val)) {
                    return false;
                } 

                currentRow.add(val);
                currentCol.add(val);
                square.add(val);
            }
        }

        return true;
    }
}
