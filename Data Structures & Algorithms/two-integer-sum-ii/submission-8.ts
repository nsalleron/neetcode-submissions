class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0
        let r = numbers.length - 1

        while(l < r){
            const result = numbers[l] + numbers[r]
            if(result < target){
                l++
            }
            if(result > target){
                r--
            }

            if(result === target){
                return [l + 1, r + 1]
            }

        }

        return []
        

    }
}
