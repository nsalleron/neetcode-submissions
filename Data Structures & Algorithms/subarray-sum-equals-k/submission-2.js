class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map()
        map.set(0, 1)

        let currentSum = 0
        let count = 0

        for(let i = 0; i < nums.length; i++){
            currentSum += nums[i]
            if (map.has(currentSum - k)) {
                count += map.get(currentSum - k)
            }
            map.set(currentSum, (map.get(currentSum) || 0) + 1)
        }

        return count
    }
}
