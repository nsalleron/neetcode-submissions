class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const map = new Set(nums)
        let current = 1
        while(map.has(current) == true){
            current += 1
        }

        return current
    }
}
