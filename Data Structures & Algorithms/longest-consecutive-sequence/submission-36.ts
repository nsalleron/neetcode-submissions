class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const uniqNums = new Set(nums)
        let res = 0
        for(let c of uniqNums.keys()){
            const previousNum = c - 1
            if(uniqNums.has(previousNum)){
                continue
            }

            let currentRes = 0
            let currentNum = c
            while(uniqNums.has(currentNum)){
                currentNum += 1
                currentRes += 1
            }

            res = Math.max(res, currentRes)

        }

        return res
    }

}