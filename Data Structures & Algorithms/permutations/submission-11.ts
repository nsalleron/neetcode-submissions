class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res = []

        const backtrack = (index: number, nums:number[]) => {
            if(index === nums.length){
                res.push([...nums])
            }

            for(let i = index; i < nums.length; i++){
                [nums[index], nums[i]] = [nums[i], nums[index]]
                backtrack(index + 1, nums);
                [nums[index], nums[i]] = [nums[i], nums[index]]
            }
        }

        backtrack(0, [...nums])

        return res
        
    }
}
