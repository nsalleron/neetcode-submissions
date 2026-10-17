class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const sizeOfRow = matrix[0].length
        let l = 0 //
        let r = sizeOfRow * matrix.length -1 

        while (l <= r){
            const middle = Math.floor((l + r) / 2)
            const value = matrix[Math.floor(middle / sizeOfRow)][middle % sizeOfRow]
            
            if(value > target){
                r = middle - 1
            } else if (value < target){
                l = middle + 1
            } else if (value === target){
                return true
            }
             
        }
        return false
    }
}
