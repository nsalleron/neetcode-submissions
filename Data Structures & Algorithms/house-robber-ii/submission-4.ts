class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        
        return nums.length === 0 ? 0 : Math.max(nums[0], this.helper(nums.slice(0,-1)), this.helper(nums.slice(1)))
    }

    helper(nums: number[]): number {
        const memo = {}

        const dfs = (index) => {
            if(index >= nums.length) return 0
            if(memo[index] !== undefined) return memo[index]

            return memo[index] = Math.max(dfs(index + 1), nums[index] + dfs(index + 2))
        }

        return dfs(0)
    }
}
