class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = [];
        const subset = []

        const dfs = (nums:number[], i: number, subset: number[], res: number[][]) => {
            if(i >= nums.length){
                res.push([...subset])
                return
            }

            // decision to include nums[i]
            subset.push(nums[i])
            dfs(nums, i + 1, subset, res)

            // decision to NOT include nums[i]
            subset.pop()
            dfs(nums, i + 1, subset, res)

        }

        dfs(nums, 0, subset, res);
        return res
    }
}
