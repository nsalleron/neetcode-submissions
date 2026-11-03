class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = new Set<number[]>();

        const seen = new Set<string>();

        const dfs = (index: number, current: number[]) => {
            if (index === nums.length) {
                const key = current.join(",");

                if (!seen.has(key)) {
                    seen.add(key);
                    res.add([...current]);
                }

                return;
            }

            dfs(index + 1, [...current, nums[index]]);
            dfs(index + 1, current);
        };

        dfs(0, []);
        
        return Array.from(res.values());
    }
}
