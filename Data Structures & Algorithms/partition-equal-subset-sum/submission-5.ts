class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        let total = nums.reduce((a, b) => a + b, 0);
        if (total % 2 !== 0) return false;

        const memo = new Map()

        const dfs = (index, remaining: number) => {
            if (remaining === 0) return true;
            if (index >= nums.length || remaining < 0) return false;

            const key = `${index},${remaining}`
            if(memo.has(key)) return memo.get(key)

            let result = false
            for (let i = index; i < nums.length; i++) {
                if (dfs(i + 1, remaining - nums[i])) {
                    result = true;
                    break;
                }
            }
            memo.set(key, result)
            return result
        };

        return dfs(0, total / 2);
    }
}
