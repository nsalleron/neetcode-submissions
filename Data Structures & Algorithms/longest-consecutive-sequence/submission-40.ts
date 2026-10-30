class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums)
        let res = 0
        for(let c of numSet.keys()){
            let val = c

            if(numSet.has(val - 1)){
                continue
            } else {
                let size = 0
                while(numSet.has(val)){
                    val = val + 1
                    size += 1
                }
                res = Math.max(res, size)
            }
        }

        return res

    }
}
