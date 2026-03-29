class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const ROWS = matrix.length
        const COLS = matrix[0].length

        this.sumMath = Array.from({length: ROWS + 1}, () => Array.from({length: COLS + 1}, () => 0))

        for(let r = 0; r < ROWS; r++){
            let prefix = 0
            for(let c = 0; c < COLS; c++){
                prefix += matrix[r][c]
                const above = this.sumMath[r][c+1]
                this.sumMath[r+1][c+1] = prefix + above
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let r1 = row1 +1
        let c1 = col1 +1
        let r2 = row2 +1
        let c2 = col2 +1 

        let bottomRight = this.sumMath[r2][c2]
        let above = this.sumMath[r1-1][c2]
        let left = this.sumMath[r2][c1 - 1]
        let topLeft = this.sumMath[r1 - 1][c1 - 1]
        return bottomRight - above - left + topLeft
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
