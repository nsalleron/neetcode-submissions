class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const uniqNums = new Set(nums)
        let consecutive = 0

        for(let c of uniqNums.keys()){
            if(uniqNums.has(c - 1)){
                continue;
            }

            let res = 1
            let next = c + 1
            while(uniqNums.has(next)){
                res += 1
                next = next + 1
            }

            consecutive = Math.max(consecutive, res)
        }

        return consecutive

    }
}
