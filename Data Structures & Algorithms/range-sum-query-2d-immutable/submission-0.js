class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const k = Math.abs(col1 - col2)
        const n = Math.abs(row1 - row2) 

        let sum = 0
        for(let i = col1; i <= col1 + k ; i++){
            for(let j = row1; j <= row1 + n; j++){
                sum += this.matrix[j][i]
            }
        }
        return sum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
