class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = []
        const part = []
        const dfs = (idx: number, remaining: number) => {
            if(remaining === 0){
                return res.push([...part])
            }
            if(idx === nums.length || remaining < 0){
                return
            }

            part.push(nums[idx])
            dfs(idx, remaining - nums[idx])
            part.pop()
            dfs(idx + 1, remaining)
        }

        dfs(0, target)

        return res 
    }
}
