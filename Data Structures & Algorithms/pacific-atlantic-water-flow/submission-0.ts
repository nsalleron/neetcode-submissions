class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        let ROWS = heights.length;
        let COLS = heights[0].length;

        let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;
            for (let [rP, cP] of directions) {
                let newR = r + rP;
                let newC = c + cP;

                if (
                    newR >= 0 &&
                    newR < ROWS &&
                    newC >= 0 &&
                    newC < COLS &&
                    !ocean[newR][newC] &&
                    heights[newR][newC] >= heights[r][c]
                ) {
                    dfs(newR, newC, ocean);
                }
            }
        };

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac);
            dfs(ROWS - 1, c, atl);
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac);
            dfs(r, COLS - 1, atl);
        }

        let res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        return res;
    }
}
