class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
      const map = new Map()
      let res = 0
      let currentSum = 0

      map.set(0, 1)

      for(let i = 0; i < nums.length; i++){
        currentSum += nums[i]

        let diff = currentSum - k


        res += map.get(diff) || 0


        map.set(currentSum, (map.get(currentSum) || 0) + 1  )

      }

      return res
    }
}
