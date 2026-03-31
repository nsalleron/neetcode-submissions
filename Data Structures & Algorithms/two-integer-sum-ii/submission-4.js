class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length - 1 
        while( l < r){
            if(numbers[l] + numbers[r] > target){
                r--
            } else if (numbers[l] + numbers[r] < target){
                l++
            } else {
                console.log(`found ${l} => ${numbers[l]} | ${r} => ${numbers[r]}`)
                return [l + 1 , r + 1]

            }
        }
        return false 
    }
}
