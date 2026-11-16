class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let s = 0
        let f = 0

        do {
            s = nums[s]
            f = nums[nums[f]]
        } while(s != f)

        let s2 = 0

        do {
            s2 = nums[s2]
            s = nums[s]
        } while (s2 !== s)

        return s
    }
}
