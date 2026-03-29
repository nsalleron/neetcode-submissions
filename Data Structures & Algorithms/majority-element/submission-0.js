class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map()
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        // Trouver la clé avec le compte maximum
    let maxKey;
    let maxCount = -Infinity;
    for (const [key, count] of map.entries()) {
      if (count > maxCount) {
        maxCount = count;
        maxKey = key;
      }
    }
    return maxKey;
    }
}
