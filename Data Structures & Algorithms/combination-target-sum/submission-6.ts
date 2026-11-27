class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = [];
        const part = [];
        const memo = {};

        const dfs = (remaining, start: number) => {
            if (remaining === 0) {
                res.push([...part]);
                return true;
            }
            if (remaining < 0) {
                return false;
            }

            for (let i = start; i < nums.length; i++) {
                part.push(nums[i]);
                dfs(remaining - nums[i], i);

                part.pop();
            }

            return false;
        };

        dfs(target, 0);

        return res;
    }
}
