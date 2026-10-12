class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const sortedNums = numbers.sort((a,b) => a - b )

        let l = 0
        let r = sortedNums.length - 1

        while (l < r){
            const val = sortedNums[l] + sortedNums[r]
            if(val === target){
                return [l + 1, r + 1]
            } else if (val < target){
                l++
            } else if (val > target){
                r--
            }
        }

        return []
    }
}
