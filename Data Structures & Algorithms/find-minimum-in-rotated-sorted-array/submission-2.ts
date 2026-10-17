class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let res = Number.MAX_SAFE_INTEGER

        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            if(nums[l]< nums[r]){
                res = Math.min(res, nums[l])
                break;
            }

            const middle = Math.floor((l + r) / 2)
            res = Math.min(res, nums[middle])

            if(nums[l] <= nums[middle]){ // sorted on passe au right
                l = middle + 1
            } else {
                r = middle - 1
            }
        }

        return res
    }
}
