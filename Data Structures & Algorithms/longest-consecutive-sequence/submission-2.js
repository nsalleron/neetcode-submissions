class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0){
            return 0
        }
        let maxSequence = 0
        let map = new Set(nums)

        for(let num of map){
            if(!map.has(num - 1)){
                let currentNum = num
                let currentStreak = 1

                while(map.has(currentNum + 1)){
                    currentNum += 1
                    currentStreak += 1
                }
                maxSequence = Math.max(maxSequence, currentStreak)
            }
        }

        return maxSequence
    }
}
