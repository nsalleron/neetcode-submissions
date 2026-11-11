class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const sorted = nums.sort((a, b) => a - b);
        const res = [];
        const stack = [];
        const dfs = (idx: number) => {
            if (idx >= nums.length) {
                res.push([...stack]);
                return;
            }

            stack.push(sorted[idx]);
            dfs(idx + 1);
            stack.pop();

            while (idx < nums.length && sorted[idx] === sorted[idx + 1]) {
                idx++;
            }
            dfs(idx + 1);
        };

        dfs(0);

        return res;
    }
}
