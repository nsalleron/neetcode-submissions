class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map()
        for(const num of nums){
            if(map.get(num) === undefined){
                map.set(num, 1)
            } else{
                return true
            }
        }
        return false
    }
}
