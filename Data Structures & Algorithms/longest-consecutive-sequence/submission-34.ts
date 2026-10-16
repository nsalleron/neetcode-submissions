class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0
        const uniqInput = new Set(nums)
        let longest = 0

        for (const num of uniqInput) {
            if (!uniqInput.has(num - 1)) {
                let currentNum = num
                let consecutive = 1

                while (uniqInput.has(currentNum + 1)) {
                    currentNum += 1
                    consecutive += 1
                }

                longest = Math.max(longest, consecutive)
            }
        }

        return longest
    }

}