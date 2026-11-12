class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res = []

        const dfs = (index: number, nums: number[]) => {
            if(index === nums.length){
                res.push([...nums])
            }

            for(let i = index; i < nums.length; i++){
                [nums[i], nums[index]] = [nums[index], nums[i]]
                dfs(index + 1, nums);
                [nums[i], nums[index]] = [nums[index], nums[i]]
            }
        }

        dfs(0, [...nums])

        return res
    }
}
