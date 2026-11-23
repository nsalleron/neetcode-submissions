class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        let total = nums.reduce((a, b) => a + b, 0);
        if (total % 2 !== 0) return false;

        const dfs = (index, remaining: number) => {
            if (remaining === 0) return true;
            if (index >= nums.length || remaining < 0) return false;

            for (let i = index; i < nums.length; i++) {
                if (dfs(i + 1, remaining - nums[i])) {
                    return true;
                }
            }

            return false;
        };

        return dfs(0, total / 2);
    }
}
