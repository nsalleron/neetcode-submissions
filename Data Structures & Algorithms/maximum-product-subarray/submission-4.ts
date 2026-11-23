class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let res = Math.max(...nums)
        let currentMin =1, currentMax = 1

        for(let n of nums){
            if(n ===0){
                currentMax = 1, currentMin = 1
                continue
            }

            let temp = currentMax * n
            currentMax = Math.max(n * currentMax, n * currentMin, n)
            currentMin = Math.min(n * currentMin, temp, n)

            res = Math.max(res, currentMin, currentMax)
        }

        return res


    }
}
