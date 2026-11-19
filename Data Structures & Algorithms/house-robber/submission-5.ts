class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const cache = Array.from({length: nums.length}, () => -1)

        const dfs = (house) => {
            if(house >= nums.length){ return 0 }

            if(cache[house] !== -1){
                return cache[house]
            }

            cache[house] = Math.max(dfs(house + 1), nums[house] + dfs(house + 2))

            return cache[house]
        }


        return dfs(0)
    }
}
