class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0 
        let r = nums.length
        let toto = 0
        while(l <= r){
            const middle = Math.floor((l + r) / 2) // 0
            const value = nums[middle] // -1
                            console.log({middle, value})

            if(value > target){
                r = middle - 1
            } else if (value < target){
                l = middle + 1 //l === 1
            } else if (value === target) {
                return middle
            }

            if(toto === 6){
                break
            }
            toto++

        }

        return -1 
    }
}
