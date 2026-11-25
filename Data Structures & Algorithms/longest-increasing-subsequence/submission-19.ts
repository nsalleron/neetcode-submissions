class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const memo = {};

        const dfs = (index, previous) => {
            if (index === nums.length) {
                return 0;
            }

            const key = `${index},${previous}`
            if (memo[key]) {
                return memo[key];
            }

            let res = 0
            for(let i = index; i < nums.length; i++){
                if(previous < nums[i]) {
                    res = Math.max(res,dfs(i + 1, nums[i])  + 1);
                }
            }

            memo[key] = res
            return memo[key];
        };

        return dfs(0, -Infinity);
    }
}
