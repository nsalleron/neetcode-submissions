class Solution {
    /**
     * @param {character[][]}
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === ".") continue;

                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

                if (
                    (rows.get(r) && rows.get(r).has(val)) ||
                    (cols.get(c) && cols.get(c).has(val)) ||
                    (squares.get(squareKey) && squares.get(squareKey).has(val))
                ) {
                    return false;
                }

                if (!rows.get(r)) rows.set(r, new Set());
                if (!cols.get(c)) cols.set(c, new Set());
                if (!squares.get(squareKey)) squares.set(squareKey, new Set());

                rows.get(r).add(val);
                cols.get(c).add(val);
                squares.get(squareKey).add(val);
            }
        }
        return true;
    }
}