class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const cache = {}

        const dfs = (houseIndex) => {
            if(houseIndex >= nums.length) return 0
            console.log(cache[houseIndex])
            if(cache[houseIndex] !== undefined){
                return cache[houseIndex]
            }

            cache[houseIndex] = Math.max(dfs(houseIndex + 1), nums[houseIndex] + dfs(houseIndex + 2))

            return cache[houseIndex]
        }

        return dfs(0)
    }
}
