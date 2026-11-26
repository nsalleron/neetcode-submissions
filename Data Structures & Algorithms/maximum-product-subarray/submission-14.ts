class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let res = Math.max(...nums)
        let currentMin = 1
        let currentMax = 1
        for(let c of nums){
            if(c === 0){
                currentMin = 1, currentMax =1
            }

            const temp = currentMax * c
            currentMax = Math.max(c * currentMin, currentMax * c, c)
            currentMin = Math.min(temp, currentMin * c, c)

            res = Math.max(res, currentMin, currentMax)

        }

        return Math.max(res, currentMin, currentMax)
    }


}
