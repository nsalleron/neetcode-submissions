class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const row = matrix[0].length
        const height = matrix.length

        let l = 0
        let r = (row * height) - 1

        while(l <= r){
            const m = Math.floor((l + r) / 2)

            const rowToInspect = Math.floor(m / row)
            const columnToInspect = m % row

            const value = matrix[rowToInspect][columnToInspect]

            if(value === target){
                return true
            }

            if(value < target){
                l = m + 1
            } else {
                r = m - 1
            }
            
        }

        return false
    

    }
}
