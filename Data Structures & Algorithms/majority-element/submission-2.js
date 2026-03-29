class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // divide and conquer
        const solve = (l, r) => {
            if(l === r){
                return { candidate: nums[l], count: 1}
            }

            const m = Math.floor((l + r ) / 2)
            const left = solve(l, m)
            const right = solve(m + 1, r)

            if(left.candidate === right.candidate){
                return { candidate: left.candidate, count:left.count + right.count }
            } else {
                if(left.count > right.count){
                    return { candidate: left.candidate, count: left.count}
                }else {
                    return { candidate: right.candidate, count: right.count}
                }
            }
        }

        const res = solve(0, nums.length - 1)

        return res.candidate



        
    }
}
