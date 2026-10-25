class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const sizeOfRow = matrix[0].length
        const n = matrix.length

        let l = 0
        let r = n * sizeOfRow - 1

        while(l <= r){
            const m = Math.floor((l + r) / 2)
            const val = matrix[Math.floor(m / sizeOfRow)][m % sizeOfRow]

            if(val === target){
                return true
            }

            if(val < target){
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return false


    }
}
