class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const sizeOfRow = matrix[0].length
        let lower = 0
        let upper = sizeOfRow * matrix.length - 1

        while(lower <= upper){
            const middle = Math.floor((lower + upper)/2)
            const value = matrix[Math.floor(middle / sizeOfRow)][middle % sizeOfRow]

            if(value > target){
                upper = middle - 1
            } else if (value < target){
                lower = middle + 1
            } else {
                return true
            }
        }

        return false





    }
}
