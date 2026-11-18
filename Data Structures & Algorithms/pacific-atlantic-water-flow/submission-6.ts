class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const atl = Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => false));
        const pac = Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => false));

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;

            for (let [rp, cp] of directions) {
                const newR = r + rp;
                const newC = c + cp;

                if (newR < 0 || newC < 0 || newR === ROWS || newC === COLS || ocean[newR][newC] === true ) {
                    continue;
                }

                if (heights[r][c] <= heights[newR][newC]) {
                    dfs(newR, newC, ocean);
                }
            }
        };

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac);
            dfs(r, COLS - 1, atl);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac);
            dfs(ROWS - 1, c, atl);
        }

        const res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (atl[r][c] && pac[r][c]) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
