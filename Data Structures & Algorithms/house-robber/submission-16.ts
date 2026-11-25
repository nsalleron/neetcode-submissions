class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const memo = {}
        const dfs = (index: number) => {
            if (index > nums.length - 1) {
                return 0;
            }
            if(memo[index]){
                return memo[index]
            }

            return memo[index] = Math.max(dfs(index + 1), nums[index] + dfs(index + 2));
        };

        return dfs(0);
    }
}
