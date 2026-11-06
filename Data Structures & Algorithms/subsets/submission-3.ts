class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = [];
        const subset = []
        const dfs = (nums:number[], i: number, subset: number[]) => {
            if(i > nums.length -1){
                res.push([...subset])
                return
            }

            subset.push(nums[i])
            dfs(nums, i + 1, subset)

            subset.pop()
            dfs(nums, i + 1, subset)
            
    
        }

        dfs(nums, 0, subset)
        return res
    }
}
