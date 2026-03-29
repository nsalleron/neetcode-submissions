class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const map = new Map()
        let currentMin = Number.MAX_VALUE
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], 1)
            if(nums[i] < currentMin && nums[i] > 0){
                currentMin = nums[i]
            }
        }

        let currentMissingNumber = currentMin + 1

        if(currentMin === Number.MAX_VALUE || currentMissingNumber > 1 && currentMin !== 1 ){
            return 1
        }




        const entries = Array.from(map.entries())
        for(let i = 0; i < entries.length; i++){
            if(map.has(currentMissingNumber)){
                currentMissingNumber += 1
            } else {
                break // we found our missing number
            }
        }


        console.log(map)
        console.log(currentMin)
        



        return currentMissingNumber
    }
}
