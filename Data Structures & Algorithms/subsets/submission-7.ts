class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = []
        const part = []

        const dfs = (index: number) => {
            if(index > nums.length){
                return
            }
            if(index === nums.length){
                return res.push([...part])
            }

            part.push(nums[index])
            dfs(index + 1)
            part.pop()

            dfs(index + 1)
        }

        dfs(0)

        return res
    }
}
