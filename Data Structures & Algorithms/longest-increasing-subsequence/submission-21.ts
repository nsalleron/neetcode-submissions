class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const memo = {};

        const dfs = (index, prevIndex) => {
            if (index === nums.length) return 0;

            const key = `${index},${prevIndex}`;
            if (memo[key]) return memo[key];

            let res = 0;
            for (let i = index; i < nums.length; i++) {
                if (prevIndex === -1 || nums[prevIndex] < nums[i]) {
                    res = Math.max(res, dfs(i + 1, i) + 1);
                }
            }

            memo[key] = res;
            return memo[key];
        };

        return dfs(0, -1);
    }
}
