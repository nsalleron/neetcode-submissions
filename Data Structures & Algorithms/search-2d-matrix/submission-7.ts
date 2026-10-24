class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let l = 0
        let r = (matrix.length * matrix[0].length) - 1


        while(l <= r){

            const m = Math.floor((l+r) / 2)
             console.log({l, m, r})


            const row = Math.floor(m / matrix[0].length)
            const element = m % matrix[0].length

            const val = matrix[row][element]

            console.log({row, element, val})

            if(val === target){
                return true
            }

            if(val > target){
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return false

    }
}
