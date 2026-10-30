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
                rows.set(row, currentRow);
                const currentCol = cols.get(col) ?? new Set();
                cols.set(col, currentCol);

                if (!currentRow.has(val)) {
                    currentRow.add(val);
                } else {
                    console.log({rows, cols, squares, row, col})
                    return false;
                }

                if (!currentCol.has(val)) {
                    currentCol.add(val);
                } else {
                    console.log({rows, cols, squares, row, col})
                    return false;
                }

                const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;

                const square = squares.get(key) ?? new Set();
                squares.set(key, square);

                if (!square.has(val)) {
                    square.add(val);
                } else {
                    console.log({rows, cols, squares, row, col})
                    return false;
                }
            }
        }

        return true;
    }
}
