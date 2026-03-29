class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxSequence = 0
        let set = new Set(nums)

        for(let i = 0; i < nums.length ; i++){
            let currentStreak = 1
            let currentNum = nums[i]


            if(set.has(currentNum - 1)){
                currentStreak += 1
                currentNum = currentNum + 1
                while(set.has(currentNum)){
                    currentStreak += 1
                    currentNum += 1
                }
            }
            maxSequence = Math.max(currentStreak, maxSequence)
        }

        return maxSequence
    }
}
