class Solution {
    /**
     * @param {number[]}
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        const dfs = (index: number, nums: number[], memo: Record<number, number> = {}) => {
            if(index >= nums.length) {
                return 0
            }

            if(memo[index] !== undefined){
                return memo[index]
            }

            return memo[index] = Math.max(dfs(index + 1, nums, memo), (nums[index] + dfs(index + 2, nums, memo)))
        }

        return Math.max(dfs(0, nums.slice(0, nums.length - 1), {}), dfs(0, nums.slice(1), {}))
    }
}