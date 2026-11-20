class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const helper = (nums: number[]) => {
            let rob1 = 0, rob2 = 0

            for(let n of nums){
                let tmp = Math.max(rob1 + n, rob2)
                rob1 = rob2
                rob2 = tmp
            }

            return rob2
        }

        return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, -1)))
    }
}
